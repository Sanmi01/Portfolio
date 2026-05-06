<template>
  <div id="skills" class="skills_container">
    <div class="skills_container__content_box">
      <common-section-title> My Skills </common-section-title>

      <div class="skills_container__content_box--grid" ref="cardsGrid">

  <!-- FRONTEND -->
  <div class="skill_card">
    <div class="skill_card__title">
      <h3 class="skill_card__title--skill_name">Frontend</h3>
      <hr class="skill_card__title--line_element" />
    </div>

    <div class="skill_card__details">
      <p class="skill_card__details--content">
        I build modern, responsive web applications with
        <span class="highlight">React.js</span>,
        <span class="highlight">Next.js</span>, and
        <span class="highlight">TypeScript</span>, focusing on clean
        architecture, reusable components, and seamless user experiences.
      </p>
    </div>

    <div class="skill_card__action">
      <router-link to="/projects">
        <button class="skill_card__action--button">View Projects</button>
      </router-link>
    </div>

    <div class="skill_card__tools">
      <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
      <div class="skill_card__tools--list">
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">React.js</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Next.js</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">TypeScript</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">JavaScript</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">TailwindCSS</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Redux</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">React Query</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">HTML &amp; CSS</p>
        </div>
      </div>
    </div>

    <div class="floating_illustration">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="147.639"
        height="49.068"
        viewBox="0 0 147.639 49.068"
      >
        <g transform="translate(-491.579 -1509.952)">
          <circle class="a circle" cx="15" cy="15" r="15" />
          <path class="b" d="M492,1548.019H629.048" />
          <path class="b" d="M492,1548.019H629.048" transform="translate(0 10)" />
          <path
            class="c"
            d="M492,1531.523s12.543-19.564,29.431-19.233,16.665,20.228,33.152,20.228,4.639-20.173,22.866-22.037c14-1.432,96.551,55.473,43.909,21.042"
          />
        </g>
      </svg>
    </div>
  </div>

  <!-- BACKEND -->
  <div class="skill_card backend">
    <div class="skill_card__title">
      <h3 class="skill_card__title--skill_name">Backend</h3>
      <hr class="skill_card__title--line_element" />
    </div>

    <div class="skill_card__details">
      <p class="skill_card__details--content">
        I build secure and scalable backend services with
        <span class="highlight">Node.js</span> and
        <span class="highlight">NestJS</span>, designing REST APIs and data
        models that power complete, end to end product experiences.
      </p>
    </div>

    <div class="skill_card__action">
      <router-link to="/projects">
        <button class="skill_card__action--button">View Projects</button>
      </router-link>
    </div>

    <div class="skill_card__tools">
      <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
      <div class="skill_card__tools--list">
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Node.js</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">NestJS</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Express.js</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">TypeScript</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">MongoDB</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">REST APIs</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Authentication</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Git</p>
        </div>
      </div>
    </div>

    <div class="floating_bubble_two">
      <hero-bubble
        size="145"
        gradient="linear-gradient(45deg, rgb(234 234 234 / 0%), rgb(226 128 73 / 30%))"
      />
    </div>
  </div>

  <!-- AI ENGINEERING -->
  <div class="skill_card">
    <div class="skill_card__title">
      <h3 class="skill_card__title--skill_name">AI Engineering</h3>
      <hr class="skill_card__title--line_element" />
    </div>

    <div class="skill_card__details">
      <p class="skill_card__details--content">
        I build AI powered applications and agentic systems with
        <span class="highlight">LLMs</span>,
        <span class="highlight">RAG pipelines</span>, and the
        <span class="highlight">Model Context Protocol</span>. Proficient with multi-agent systems, fine-tuning, and integrating AI into production products.
      </p>
    </div>

    <div class="skill_card__action">
      <router-link to="/projects">
        <button class="skill_card__action--button">View Projects</button>
      </router-link>
    </div>

    <div class="skill_card__tools">
      <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
      <div class="skill_card__tools--list">
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Python</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">OpenAI SDK</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">LangChain</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">RAG</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">MCP</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Agents SDK</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Hugging Face</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Fine tuning</p>
        </div>
        <div class="item">
          <img src="/src/assets/icons/check.svg" alt="" />
          <p class="item__name">Vector DBs</p>
        </div>
      </div>
    </div>

    <div class="floating_bubble">
      <hero-bubble
        size="145"
        gradient="linear-gradient(45deg, rgb(234 234 234 / 0%), rgb(226 128 73 / 30%))"
      />
    </div>
  </div>

</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tilt from "vanilla-tilt";
import AppIcon from "../../common/AppIcon.vue";
import CommonSectionTitle from "../../common/CommonSectionTitle.vue";
import CommonSquareGrid from "../../common/CommonSquareGrid.vue";
import HeroBubble from "../hero/HeroBubble.vue";

export default defineComponent({
  components: { CommonSquareGrid, CommonSectionTitle, AppIcon, HeroBubble },
  mounted() {
    const cardsGrid = <HTMLDivElement>this.$refs.cardsGrid;
    const skillsCard: HTMLDivElement[] = [];
    for (let i = 0; i < cardsGrid.children.length; i++)
      skillsCard.push(<HTMLDivElement>cardsGrid.children.item(i));
    tilt.init(skillsCard, {
      speed: 100,
    });
  },
});
</script>


<style scoped lang="scss">
@import "../../../styles/components/home/skills.scss";

.a {
  fill: rgba(246, 158, 91, 0.398);
  transform: translate(507px, 1526px);
}
.b,
.c {
  fill: none;
}
.b {
  stroke: #f8a363;
  stroke-width: 2px;
  stroke-dasharray: 160px;
  stroke-dashoffset: 60px;
  transition: all ease 100ms;
}
.c {
  stroke: #cecdcd;
}
</style>
