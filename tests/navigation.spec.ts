import { expect, test } from "@playwright/test";

const routes = ["/", "/szkolenia", "/intro", "/dla-dzieci", "/hokej", "/wyprawy", "/o-nas", "/kontakt"];

test("strony główne odpowiadają i mają jeden nagłówek h1", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.ok()).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  }
});

test("menu prowadzi do szkoleń, hokeja i kontaktu", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Główne" }).getByRole("link", { name: "Szkolenia" }).click();
  await expect(page).toHaveURL(/\/szkolenia$/);
  await page.getByRole("navigation", { name: "Główne" }).getByRole("link", { name: "Hokej" }).click();
  await expect(page).toHaveURL(/\/hokej$/);
  await page.getByRole("navigation", { name: "Główne" }).getByRole("link", { name: "Kontakt" }).click();
  await expect(page).toHaveURL(/\/kontakt$/);
});

test("przycisk intro ze strony głównej otwiera intro", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Intro nurkowe" }).first().click();
  await expect(page).toHaveURL(/\/intro$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Nurkowanie na próbę");
});

test("stary adres intro przekierowuje na /intro", async ({ page }) => {
  await page.goto("/intro-nurkowe-nurkowanie-na-probe");
  await expect(page).toHaveURL(/\/intro$/);
});

test("menu mobilne otwiera kontakt", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  const dialog = page.getByRole("dialog", { name: "Menu" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("link", { name: "Kontakt", exact: true }).click();
  await expect(page).toHaveURL(/\/kontakt$/);
});

test("sporne ceny intro i stopnia podstawowego nie są na stronie", async ({ page }) => {
  await page.goto("/szkolenia");
  const courses = await page.locator("body").innerText();
  expect(courses).not.toMatch(/1[\s ]?900 zł|2350|2550|2900|3000|3290|3390/);
  await page.goto("/intro");
  const intro = await page.locator("body").innerText();
  expect(intro).not.toMatch(/190 zł|250 zł|200 zł|230 zł/);
  expect(intro).toContain("290 zł");
});
