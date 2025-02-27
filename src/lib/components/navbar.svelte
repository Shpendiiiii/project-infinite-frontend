<script>
    let isHovered = false;
</script>

<nav>
    <div class="container hidden md:flex justify-between items-center mx-auto px-5 py-2 bg-gray-800 text-white w-1/2">
        <div class="flex flex-col items-center">
            <div
                    role="button"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded={isHovered}
                    on:mouseover={() => (isHovered = true)}
                    on:mouseleave={() => (isHovered = false)}
                    on:focus={() => (isHovered = true)}
                    aria-roledescription="click"
                    class="relative"
            >
                Home

                {#if isHovered}
                    <div class="absolute top-full left-1/4 transform -translate-x-1/2 text-center w-[160%] bg-gray-800 text-white rounded-md shadow-md mx-3 z-10"
                         on:mouseover={() => (isHovered = true)}
                         on:mouseleave={() => (isHovered = false)}
                         aria-haspopup="true"
                    >
                        This content appears on hover!
                    </div>
                {/if}
            </div>
        </div>
        <p>Football & Community</p>
        <p>About</p>
        <p>More</p>
    </div>

    <div class="md:hidden">
        <p>Easter Egg</p>
    </div>
</nav>