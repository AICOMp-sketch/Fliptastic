const flipper = document.getElementById('flipper');
        const flipBtn = document.getElementById('flip-btn');
        const changeBtn = document.getElementById('change-btn');
        const backImage = document.getElementById('back-image');
        const dots = document.querySelectorAll('.dot');

        const imageCategories = ['nature', 'city', 'beach'];
        let currentCategoryIndex = 0;

        // Flip the card
        flipBtn.addEventListener('click', () => {
            flipper.classList.toggle('flipped');
            
            // Update button text based on state
            if (flipper.classList.contains('flipped')) {
                flipBtn.textContent = 'Flip Back';
            } else {
                flipBtn.textContent = 'Flip Image';
            }
        });

        // Change the image
        changeBtn.addEventListener('click', () => {
            // Cycle through categories
            currentCategoryIndex = (currentCategoryIndex + 1) % imageCategories.length;
            updateImage();
            updateDots();
        });

        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentCategoryIndex = parseInt(this.getAttribute('data-index'));
                updateImage();
                updateDots();
            });
        });

        function updateImage() {
            const category = imageCategories[currentCategoryIndex];
            backImage.src = `https://source.unsplash.com/random/600x400/?${category}`;
            
            // Add a small delay to ensure smooth transition
            backImage.style.opacity = '0';
            setTimeout(() => {
                backImage.style.opacity = '1';
            }, 300);
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentCategoryIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Preload next images for smoother transitions
        function preloadImages() {
            imageCategories.forEach(category => {
                const img = new Image();
                img.src = `https://source.unsplash.com/random/600x400/?${category}`;
            });
        }

        // Initialize
        preloadImages();