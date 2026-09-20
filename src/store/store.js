import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

     addToCart: (product, quantity = 1) => {
         

            // 1. Защита от товара без id
            if (product?.id == null) {
                console.warn('addToCart: у товара нет id', product)
                return
            }

            // 2. Приводим количество к числу
            const qty = Math.max(1, Math.floor(Number(quantity)) || 1)

            const items = get().items

            // 3. Сравниваем id как строки (защита от "2" vs 2)
            const existing = items.find((i) => String(i.id) === String(product.id))

            if (existing) {
                set({
                items: items.map((i) =>
                    String(i.id) === String(product.id)
                    ? { ...i, quantity: i.quantity + qty }
                    : i
                ),
                })
            } else {
                set({ items: [...items, { ...product, quantity: qty }] })
            }
    },

      // Удалить товар
      removeFromCart: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) })
      },

      // Изменить количество
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        })
      },

      // Очистить корзину
      clearCart: () => set({ items: [] }),

      // Геттеры
      getTotalPrice: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      getTotalItems: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: 'cart-storage', // ключ в localStorage
    }
  )
)