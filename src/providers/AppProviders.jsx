import { NotesProvider } from "../context/NotesContext";

export default function AppProviders({ children }) {
  return <NotesProvider>{children}</NotesProvider>;
}
