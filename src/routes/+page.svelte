<script lang="ts">
  import "../routes/style/app.css";
  import type {
    Difficulty,
    Category,
    ProgrammingLanguage,
    FilterState,
    Problem
  } from "$lib/types";
  import pb from '$lib/pocketbase';

  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];
  const categories: Category[] = [
    "Arrays",
    "Strings",
    "Trees",
    "Dynamic Programming",
    "Graphs",
    "Hash Tables",
    "Linked Lists",
  ];
  const languages: ProgrammingLanguage[] = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
  ];

  let filters: FilterState = {
    difficulty: "",
    category: "",
    language: "",
  };

  let problems: Problem[] = [];

  // Fetch problems from PocketBase
  async function loadProblems() {
    try {
      const records = await pb.collection('problems').getFullList<Problem>({
        filter: `difficulty = "${filters.difficulty}" && category = "${filters.category}" && language = "${filters.language}"`,
      });
      problems = records;
    } catch (error) {
      console.error('Error fetching problems:', error);
    }
  }

  // Call loadProblems when filters change
  $: loadProblems();
</script>

<div>
  <section class="text-center header-section">
    <h1>Welcome to Coding Hub</h1>
    <p>
      Master competitive programming with our curated collection of problems,
      solutions, and AI-powered learning assistance.
    </p>
  </section>

  <section>
    <h2>Filter Problems</h2>
    <div class="filter-section">
      <div>
        <label for="language-select">Language</label>
        <select id="language-select" bind:value={filters.language}>
          <option value="">All Languages</option>
          {#each languages as language}
            <option value={language}>{language}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="difficulty-select">Difficulty</label>
        <select id="difficulty-select" bind:value={filters.difficulty}>
          <option value="">All Difficulties</option>
          {#each difficulties as difficulty}
            <option value={difficulty}>{difficulty}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="category-select">Category</label>
        <select id="category-select" bind:value={filters.category}>
          <option value="">All Categories</option>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>
    </div>
  </section>

  <section>
    <h2>Problem List</h2>
    <div class="text-center text-gray-500">
      {#if problems.length === 0}
        Select filters to view problems
      {:else}
        <ul>
          {#each problems as problem}
            <li>{problem.title}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>
</div>
