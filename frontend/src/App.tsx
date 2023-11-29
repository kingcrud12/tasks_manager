import { Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Stack gap="30px">
      <NavBar />
      <Stack gap="30px" direction="row">
        <Tasks title="Sleeping" text="I'll do it after coding" />
        <Tasks title="coding" text="I'll do it after sleeping" />
      </Stack>
    </Stack>
  );
}

export default App;
