// Insert navbar and footer once loaded
document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
      <div class="navbar">
        <a href="/index.html" class="logo">StudyStrong</a>
        <nav>
          <ul class="nav-menu">
            <li class="dropdown">
              <a>Recipes ▾</a>
              <ul class="dropdown-menu">
                <li><a href="/search.html">Search</a></li>
                <li><a href="#" id="random-recipe">Suprise me</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a>Calculators ▾</a>
              <ul class="dropdown-menu">
                <li><a href="/calculators/bmi.html">BMI</a></li>
                <li><a href="/calculators/caloric-intake.html">Caloric Intake</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a>Workouts ▾</a>
              <ul class="dropdown-menu">
                <li><a href="/workouts/at-home.html">At-Home</a></li>
                <li><a href="/workouts/at-gym.html">At-Gym</a></li>
              </ul>
            </li>
            <li><a href="/meetthechef.html">About Us</a></li>
          </ul>
        </nav>
        <div class="search-box">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    `;
    const footerHTML = `
    <footer>
      <div class="footer-about">
        <p>Helping students live stronger, healthier lives — fast, affordable, and sustainable.</p>
        <p>Need help? <a href="mailto:support@studystrong.com">support@studystrong.com</a></p>
      </div>

      <div class="footer-links">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/search.html">Search</a></li>
          <li><a href="#">Surprise me!</a></li>
        </ul>
        <ul>
          <li><a href="/calculators/bmi.html">BMI Calculator</a></li>
          <li><a href="/calculators/caloric-intake.html">Energy Intake Calculator</a></li>
        </ul>
        <ul>
          <li><a href="/workouts/at-home.html">At-Home Workouts</a></li>
          <li><a href="/workouts/at-gym.html">At-Gym</a></li>
        </ul>
      </div>

      <div class="newsletter">
        <h4>Subscribe to our weekly newsletter 💌</h4>
        <form>
          <input type="email" placeholder="Your email" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div class="socials">
        <a href="#"><img src="/images/instagram_icon.png" alt="Instagram" /></a>
        <a href="#"><img src="/images/youtube_icon.png" alt="YouTube" /></a>
      </div>

      <div class="footer-bottom">
        © Copyright - StudyStrong 2025
      </div>
    </footer>
    `;

    // Inject navbar if exists
    const navbarTarget = document.getElementById("navbar");
    if (navbarTarget) navbarTarget.innerHTML = navbarHTML;

    // Inject footer if ezists
    const footerTarget = document.getElementById("footer");
    if (footerTarget) footerTarget.innerHTML = footerHTML;

    // Add listener AFTER Navbar injection
    document.getElementById("random-recipe").addEventListener("click", function(e) {
        e.preventDefault();

        const recipes = [
            "/recipes/protein-pancakes.html",
            "/recipes/smoothie-bowl.html",
            "/recipes/chickpea-salad.html"
        ];

        // Select random number based on number of recipes and select it
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const chosenRecipe = recipes[randomIndex];

        // Go to recipe page
        window.location.href = chosenRecipe;
    });
});

// Ensure maximum of one expandable section is open at any one time
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isOpen = content.style.display === "block";

        // Close all
        document.querySelectorAll(".accordion-content").forEach(c => {
            c.style.display = "none";
        });

        // Toggle current
        content.style.display = isOpen ? "none" : "block";
    });
});