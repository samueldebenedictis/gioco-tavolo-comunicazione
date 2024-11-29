import { test, expect } from "@playwright/test";

test.use({ baseURL: "http://localhost:3000" });

test("Has title", async ({ page }) => {
  await page.goto("/gioco-tavolo-comunicazione");
  await expect(page).toHaveTitle("Gioco da Tavolo Comunicazione");
  const locatorH1 = page.locator("h1");
  await expect(locatorH1).toHaveText("Benvenuti!");
});

test("Compare l'errore se non compilo i nomi giocatore", async ({ page }) => {
  const locatorErrore = page.getByText("Errore");

  await page.goto("/gioco-tavolo-comunicazione");
  await expect(locatorErrore).toBeHidden();

  await test.step("Click submit senza compilare", async () => {
    await page.getByRole("link", { name: "Avvia la partita" }).click();
    await expect(locatorErrore).toBeVisible();
  });

  await test.step("Compila e click submit", async () => {
    await page.getByLabel("Nome giocatore 1").fill("Samuel");
    await page.getByLabel("Nome giocatore 2").fill("Stefano");
    await page.getByRole("link", { name: "Avvia la partita" }).click();
    await expect(locatorErrore).toBeHidden();
  });
});
