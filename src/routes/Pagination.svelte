<script lang="ts">
  import { goto } from "$app/navigation";

  export let totalPages = 1;
  export let currentPage = 1;

  function toPage(n: number) {
    if (n < 1 || n > totalPages) return;
    goto(`?page=${n.toString()}`);
  }

  function prevPage() {
    toPage(currentPage - 1);
  }

  function nextPage() {
    toPage(currentPage + 1);
  }
</script>

{#if totalPages > 1}
  <div class="HomeBodyListPagination">
    <div class="HBLP_Inside">
      <button
        class="HBLP_Inside_Box"
        on:click={prevPage}
        disabled={currentPage === 1}><i class="fas fa-chevron-left"></i></button
      >

      {#each { length: totalPages } as _, idx}
        {@const pageNum = idx + 1}
        {@const isActive = pageNum === currentPage}
        <button
          class="HBLP_Inside_Box"
          class:HBLP_Inside_Box_Active={isActive}
          on:click={() => toPage(pageNum)}
        >
          <p>{pageNum}</p>
        </button>
      {/each}

      <button
        class="HBLP_Inside_Box"
        on:click={nextPage}
        disabled={currentPage === totalPages}
        ><i class="fas fa-chevron-right"></i></button
      >
    </div>
  </div>
{/if}

<style>
  .HomeBodyListPagination {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .HBLP_Inside {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
  }

  .HBLP_Inside_Box {
    transition: ease 0.4s;
    text-decoration: unset;
    color: unset;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(35, 35, 35, 0);
    border-radius: 10px;
    height: 100%;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0);
    transform: scale(1);
    border: solid 1px rgba(255, 255, 255, 0);
    color: rgba(255, 255, 255, 0.1);
    font-weight: bold;
    transition: ease 0.4s;
    cursor: pointer;
  }

  .HBLP_Inside_Box:disabled {
    cursor: not-allowed;
  }

  .HBLP_Inside_Box:hover:not(:disabled) {
    text-decoration: unset;
    color: unset;
    background: linear-gradient(to top right, #232323, #262626, #232323);
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
    border: solid 1px rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.85);
  }

  .HBLP_Inside_Box.HBLP_Inside_BoxDots:hover {
    border: unset;
    background: unset;
    box-shadow: unset;
    color: rgba(255, 255, 255, 0.1);
  }

  .HBLP_Inside_Box.HBLP_Inside_BoxDots {
    border: unset;
    background: unset;
    box-shadow: unset;
  }

  .HBLP_Inside_Box.HBLP_Inside_Box_Active {
    transition: ease 0.4s;
    text-decoration: unset;
    color: unset;
    /*background: #262626;*/
    /*box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);*/
    transform: scale(1.01);
    border: solid 1px rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.75);
  }
</style>
