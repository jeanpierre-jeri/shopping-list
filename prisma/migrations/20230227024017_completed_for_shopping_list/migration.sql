-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductShoppingList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "shoppingListId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "ProductShoppingList_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductShoppingList_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "ShoppingList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductShoppingList" ("id", "productId", "quantity", "shoppingListId") SELECT "id", "productId", "quantity", "shoppingListId" FROM "ProductShoppingList";
DROP TABLE "ProductShoppingList";
ALTER TABLE "new_ProductShoppingList" RENAME TO "ProductShoppingList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
