import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UrlShrinkForm from "@/components/UrlShrinkForm";

const mockOnSubmit = jest.fn();
describe("Shrink form testing", () => {
  beforeEach(() => {
    render(<UrlShrinkForm onSubmit={mockOnSubmit} />);
  });
  describe("with valid url inputs", () => {
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

    it("should not display error when value is valid", async () => {
      fireEvent.input(screen.getByRole("textbox", { name: /fullUrl/i }), {
        target: {
          value: "https://www.google.com",
        },
      });
      fireEvent.submit(screen.getByRole("button"));
      await waitFor(() =>
        expect(screen.queryAllByRole("alert")).toHaveLength(0)
      );
      expect(screen.getByRole("textbox", { name: /fullUrl/i }).value).toBe(
        "https://www.google.com"
      );
    });
  });
});
