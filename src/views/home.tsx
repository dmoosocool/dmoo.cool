import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useStore()
    const { counter, name } = storeToRefs(store)
    return {
      counter,
      name,
    }
  },
  render() {
    return (
      <>
        <meta property="og:site_name" content="dmoosocool's blog" />
        <meta property="og:title" content="dmoosocool" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/30599141?v=4"
        />
        <meta property="og:url" content="https://github.com/dmoosocool" />

        <div class="container mx-auto">
          <div class="hstack">
            <h1>Hello {this.name} ~</h1>
            <p>your counter: {this.counter}</p>
          </div>

          <div class="hstack justify-between">
            <button class="plus-btn" onClick={() => (this.counter += 1)}>
              +
            </button>
            <button class="minus-btn" onClick={() => (this.counter -= 1)}>
              -
            </button>
          </div>
        </div>
      </>
    )
  },
})
