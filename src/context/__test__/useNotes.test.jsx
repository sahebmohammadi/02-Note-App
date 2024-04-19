import { renderHook, act, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { useNotes, useNotesDispatch } from "../NotesContext";
import AppProviders from "../../providers/AppProviders";

test("should render the inital value of notes", () => {
  const { result } = renderHook(useNotes, { wrapper: AppProviders });
  expect(result.current.length).toBe(0);
});

test("should render the inital value of notes", () => {
  const { result } = renderHook(useNotes, { wrapper: AppProviders });
  const { result: action } = renderHook(useNotesDispatch, {
    wrapper: AppProviders,
  });
  const newNote = {
    title: "note title",
    description: "note desc",
    id: Date.now(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
  act(() => action.current({ type: "add", payload: newNote }));
  // expect(action.current).toHaveBeenCalledTimes(1);
  expect(result.current.length).toBe(1);
});
