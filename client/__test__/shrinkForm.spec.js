import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UrlShrinkForm from "@/components/UrlShrinkForm";

const mockOnSubmit = jest.fn((fullUrl) => {
  return Promise.resolve({ fullUrl });
});

describe("Shrink form testing", () => {
  describe("with valid url inputs", () => {
    beforeEach(() => {
      render(<UrlShrinkForm onSubmit={mockOnSubmit} />);
    });
    it("should display required error when value is invalid", async () => {
      fireEvent.submit(screen.getByRole("button"));
      expect(await screen.findAllByRole("alert")).toHaveLength(1);
      expect(mockOnSubmit).not.toBeCalled();
    });

    it("should display matching error when url form is invalid", async () => {
      fireEvent.input(screen.getByRole("textbox", { name: /fullUrl/i }), {
        target: {
          value: "test",
        },
      });

      fireEvent.submit(screen.getByRole("button"));

      expect(await screen.findAllByRole("alert")).toHaveLength(1);
      expect(mockOnSubmit).not.toBeCalled();
      expect(screen.getByRole("textbox", { name: /fullUrl/i }).value).toBe(
        "test"
      );
    });
  });
});
