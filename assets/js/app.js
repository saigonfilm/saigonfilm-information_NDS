// App JavaScript for Nong Dan So - Slide-Centric Web Experience

const slidesData = [
    { id: 1, title: "Trang bìa - Công nghệ đồng hành, Nông dân vươn xa" },
    { id: 2, title: "Bối cảnh & Sự cần thiết của chương trình" },
    { id: 3, title: "Mục tiêu chiến lược của chương trình" },
    { id: 4, title: "Định dạng: Đơn vị sản xuất & Cố vấn chuyên gia" },
    { id: 5, title: "Định dạng: Khung phát sóng & Lịch trình VTV" },
    { id: 6, title: "Điểm khác biệt: Truyền hình ứng dụng thực tiễn" },
    { id: 7, title: "Điểm nổi bật: Trải nghiệm & Đồ họa 3D/AI" },
    { id: 8, title: "Điểm nổi bật: Kết nối doanh nghiệp & QR Code" },
    { id: 9, title: "Tầm nhìn: Nền tảng chuyển đổi số bền vững" },
    { id: 10, title: "Vì sao doanh nghiệp nên đồng hành?" },
    { id: 11, title: "Hệ sinh thái truyền thông có giá trị lâu dài" },
    { id: 12, title: "Đối tượng khán giả mục tiêu" },
    { id: 13, title: "Hệ sinh thái truyền thông đa nền tảng" },
    { id: 14, title: "Giá trị doanh nghiệp nhận được" },
    { id: 15, title: "Các nhóm doanh nghiệp phù hợp đồng hành" },
    { id: 16, title: "Thông điệp đồng hành cùng Nông dân số" },
    { id: 17, title: "Mô hình & Các gói đồng hành tài trợ" },
    { id: 18, title: "Nhà tài trợ Danh xưng (Title Sponsor - Từ 2 tỷ)" },
    { id: 19, title: "Nhà tài trợ Kim Cương (~1,5 tỷ/năm)" },
    { id: 20, title: "Nhà tài trợ Vàng & Nhà tài trợ Bạc" },
    { id: 21, title: "Nhà đồng hành (Theo tập / Chuyên đề)" },
    { id: 22, title: "Các hình thức tài trợ linh hoạt" },
    { id: 23, title: "Chi tiết 8 hình thức tài trợ" },
    { id: 24, title: "Cam kết từ Ban Tổ Chức" },
    { id: 25, title: "Lời ngỏ & Thông tin liên hệ Ban Sản Xuất" }
];

let currentSlideIndex = 1;
const totalSlides = slidesData.length;

// Global function to open lightbox from anywhere on page
window.openLightbox = function(index) {
    currentSlideIndex = Math.max(1, Math.min(totalSlides, index));
    updateLightbox();
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
};

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

function updateLightbox() {
    const slideNumStr = String(currentSlideIndex).padStart(2, '0');
    const imgSrc = `assets/slides/slide_${slideNumStr}.jpg`;
    const slideInfo = slidesData[currentSlideIndex - 1];

    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxDownloadLink = document.getElementById('lightboxDownloadLink');

    if (lightboxImg) lightboxImg.src = imgSrc;
    if (lightboxCounter) {
        lightboxCounter.textContent = `Trang ${currentSlideIndex} / ${totalSlides} • ${slideInfo.title}`;
    }
    if (lightboxDownloadLink) {
        lightboxDownloadLink.href = imgSrc;
        lightboxDownloadLink.setAttribute('download', `nong_dan_so_slide_${slideNumStr}.jpg`);
    }

    // Also sync the player if on page
    updatePlayer(currentSlideIndex);
}

function nextLightboxSlide() {
    currentSlideIndex = currentSlideIndex >= totalSlides ? 1 : currentSlideIndex + 1;
    updateLightbox();
}

function prevLightboxSlide() {
    currentSlideIndex = currentSlideIndex <= 1 ? totalSlides : currentSlideIndex - 1;
    updateLightbox();
}

// Player (Top Carousel)
let playerIndex = 1;

function updatePlayer(index) {
    playerIndex = Math.max(1, Math.min(totalSlides, index));
    const slideNumStr = String(playerIndex).padStart(2, '0');
    const imgSrc = `assets/slides/slide_${slideNumStr}.jpg`;
    const slideInfo = slidesData[playerIndex - 1];

    const playerSlideImg = document.getElementById('playerSlideImg');
    const playerCounter = document.getElementById('playerCounter');
    const playerSlideTitle = document.getElementById('playerSlideTitle');

    if (playerSlideImg) playerSlideImg.src = imgSrc;
    if (playerCounter) playerCounter.textContent = `Slide ${playerIndex} / ${totalSlides}`;
    if (playerSlideTitle) playerSlideTitle.textContent = `${playerIndex}. ${slideInfo.title}`;

    // Highlight active thumb
    document.querySelectorAll('.player-thumb').forEach((thumb, idx) => {
        if (idx + 1 === playerIndex) {
            thumb.classList.add('ring-2', 'ring-emerald-400', 'opacity-100');
            thumb.classList.remove('opacity-60');
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            thumb.classList.remove('ring-2', 'ring-emerald-400', 'opacity-100');
            thumb.classList.add('opacity-60');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Top Thumb Strip
    const thumbStrip = document.getElementById('thumbStrip');
    if (thumbStrip) {
        thumbStrip.innerHTML = slidesData.map(slide => {
            const slideNumStr = String(slide.id).padStart(2, '0');
            const imgSrc = `assets/slides/slide_${slideNumStr}.jpg`;
            return `
                <button type="button" class="player-thumb flex-shrink-0 w-24 aspect-video rounded-lg overflow-hidden border border-slate-700 opacity-60 hover:opacity-100 transition-all cursor-pointer relative" onclick="updatePlayer(${slide.id})" aria-label="${slide.title}">
                    <img src="${imgSrc}" alt="${slide.title}" class="w-full h-full object-cover">
                    <span class="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-white font-bold text-center py-0.5">S${slideNumStr}</span>
                </button>
            `;
        }).join('');
    }

    updatePlayer(1);

    // 2. Player Controls
    const playerPrevBtn = document.getElementById('playerPrevBtn');
    const playerNextBtn = document.getElementById('playerNextBtn');
    const playerFullscreenBtn = document.getElementById('playerFullscreenBtn');
    const playerSlideContainer = document.getElementById('playerSlideContainer');
    const toggleViewerBtn = document.getElementById('toggleViewerBtn');

    if (playerPrevBtn) {
        playerPrevBtn.addEventListener('click', () => {
            const newIdx = playerIndex <= 1 ? totalSlides : playerIndex - 1;
            updatePlayer(newIdx);
        });
    }

    if (playerNextBtn) {
        playerNextBtn.addEventListener('click', () => {
            const newIdx = playerIndex >= totalSlides ? 1 : playerIndex + 1;
            updatePlayer(newIdx);
        });
    }

    if (playerFullscreenBtn) {
        playerFullscreenBtn.addEventListener('click', () => {
            openLightbox(playerIndex);
        });
    }

    if (playerSlideContainer) {
        playerSlideContainer.addEventListener('click', () => {
            openLightbox(playerIndex);
        });
    }

    if (toggleViewerBtn) {
        toggleViewerBtn.addEventListener('click', () => {
            openLightbox(playerIndex);
        });
    }

    // 3. Lightbox Controls
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');
    const prevSlideBtn = document.getElementById('prevSlideBtn');
    const nextSlideBtn = document.getElementById('nextSlideBtn');
    const lightboxModal = document.getElementById('lightboxModal');

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (prevSlideBtn) prevSlideBtn.addEventListener('click', prevLightboxSlide);
    if (nextSlideBtn) nextSlideBtn.addEventListener('click', nextLightboxSlide);

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        // Touch Swipe Navigation on Mobile
        let touchStartX = 0;
        let touchEndX = 0;
        lightboxModal.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                touchStartX = e.touches[0].clientX;
            }
        }, { passive: true });

        lightboxModal.addEventListener('touchend', (e) => {
            if (e.changedTouches && e.changedTouches.length > 0) {
                touchEndX = e.changedTouches[0].clientX;
                const diff = touchEndX - touchStartX;
                if (Math.abs(diff) > 40) {
                    if (diff < 0) {
                        nextLightboxSlide();
                    } else {
                        prevLightboxSlide();
                    }
                }
            }
        }, { passive: true });
    }

    // 4. Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        const isLightboxOpen = lightboxModal && !lightboxModal.classList.contains('hidden');
        if (isLightboxOpen) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextLightboxSlide();
            if (e.key === 'ArrowLeft') prevLightboxSlide();
        } else {
            // Control the player if visible
            if (e.key === 'ArrowRight') {
                const newIdx = playerIndex >= totalSlides ? 1 : playerIndex + 1;
                updatePlayer(newIdx);
            }
            if (e.key === 'ArrowLeft') {
                const newIdx = playerIndex <= 1 ? totalSlides : playerIndex - 1;
                updatePlayer(newIdx);
            }
        }
    });

    // 5. Contact Form Mock
    const contactForm = document.getElementById('contactForm');
    const formSuccessNotice = document.getElementById('formSuccessNotice');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.classList.add('opacity-50', 'pointer-events-none');
            setTimeout(() => {
                contactForm.classList.add('hidden');
                if (formSuccessNotice) {
                    formSuccessNotice.classList.remove('hidden');
                }
            }, 600);
        });
    }

    // 6. Smooth Scroll with exact offset for Category links
    document.querySelectorAll('a[href^="#cat-"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                e.preventDefault();
                // If it is sponsorship section, sync top player to slide 17
                if (targetId === '#cat-goi-tai-tro') {
                    updatePlayer(17);
                }
                const headerOffset = 175;
                const elementPosition = targetElem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                try {
                    history.pushState(null, null, targetId);
                } catch (err) {
                    // Ignore SecurityError when loaded from file:// protocol
                }
            }
        });
    });

    // 7. Auto-select Title Sponsor when clicking register Danh Xưng (Desktop & Mobile)
    ['navDangKyDanhXung', 'navDangKyDanhXungMobile'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                const select = document.getElementById('sponsorPackageSelect');
                if (select) {
                    select.value = 'Nhà tài trợ Danh xưng (Từ 2 Tỷ)';
                    select.classList.add('ring-2', 'ring-amber-400');
                    setTimeout(() => {
                        select.classList.remove('ring-2', 'ring-amber-400');
                    }, 2500);
                }
            });
        }
    });

    // 8. Dark / Light Theme Mode
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function updateThemeUI(isDark) {
        if (!themeToggleBtn) return;
        if (isDark) {
            themeToggleBtn.innerHTML = '<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>';
            themeToggleBtn.setAttribute('title', 'Chuyển sang chế độ sáng');
            themeToggleBtn.setAttribute('aria-label', 'Chuyển sang chế độ sáng');
        } else {
            themeToggleBtn.innerHTML = '<i data-lucide="moon" class="w-4 h-4 text-slate-700"></i>';
            themeToggleBtn.setAttribute('title', 'Chuyển sang chế độ tối');
            themeToggleBtn.setAttribute('aria-label', 'Chuyển sang chế độ tối');
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    const isCurrentDark = document.documentElement.classList.contains('dark') || !document.documentElement.classList.contains('light');
    updateThemeUI(isCurrentDark);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLightNow = document.documentElement.classList.contains('light');
            if (isLightNow) {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                try { localStorage.setItem('nds_theme', 'dark'); } catch (e) {}
                updateThemeUI(true);
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                try { localStorage.setItem('nds_theme', 'light'); } catch (e) {}
                updateThemeUI(false);
            }
        });
    }

    // 9. Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

