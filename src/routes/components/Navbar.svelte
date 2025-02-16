<!-- Navbar.svelte -->
<script>
    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };
</script>

<nav>
    <div class="nav-content">
        <div class="logo">
            <a href="/">Competitive Programming Hub</a>
        </div>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="mobile-menu-btn" on:click={toggleMenu}>
            <span class="hamburger" class:open={isOpen}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </span>
        </button>

        <div class="nav-links" class:active={isOpen}>
            <a href="/" class="nav-link">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/profile" class="nav-link">Profile</a>
        </div>
    </div>
</nav>

<style>
    nav {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .nav-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo a {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        text-decoration: none;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .nav-link {
        color: #666;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: #333;
    }

    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 24px;
        height: 20px;
    }

    .bar {
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.3s ease;
    }

    /* Hamburger animation */
    .hamburger.open .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.open .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }

        .nav-links {
            position: fixed;
            top: 4rem;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
</style>
