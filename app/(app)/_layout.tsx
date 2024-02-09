import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="palettes/[slug]" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </>
  );
}
