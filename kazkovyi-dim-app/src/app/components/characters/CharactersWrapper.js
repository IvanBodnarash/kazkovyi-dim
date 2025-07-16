import { fetchCharacters } from "@/app/utils/fetchCharacters";
import CharactersClient from "./CharactersClient";

export default async function CharactersWrapper() {
  const chars = await fetchCharacters();

  return <CharactersClient chars={chars} />;
}
