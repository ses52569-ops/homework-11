export default class BurgerMenu {
	constructor(config, headerFixedInstance = null) {
		this.config = config;
		this.burgerButton = document.querySelector(`.${this.config.BURGER}`);
		this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`);
		// Исправлено: Используем класс "Page__body", который есть у <html>,
		// либо, более корректно, находим <body> напрямую, если он не имеет класса.
		// Предполагая, что <body> должен быть выбран, даже если у него нет класса.
		this.body = document.body; // Предполагаем, что <body> - это тот элемент, который нужно блокировать.
		this.headerFixedInstance = headerFixedInstance;
		// Исправлено: Добавляем точку перед классами для querySelector
		this.main = document.querySelector(`main.${this.config.MAIN}`); // Убрана точка, если MAIN - это имя тега, либо добавлена, если это класс

		if (!this.burgerButton || !this.burgerMenu || !this.body) {
			throw new Error("Required DOM elements are missing.");
		}

		// Исправлено: Добавлена проверка, если MAIN элемент не найден
		if (this.config.MAIN && !this.main) {
			console.warn(`Main element with class "${this.config.MAIN}" not found.`);
		}

		this.isMobileView = window.innerWidth <= this.config.BREAKPOINT;

		this.onBurgerClick = this.onBurgerClick.bind(this);
		this.onBodyClick = this.onBodyClick.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this);

		this.manageEvents();
		window.addEventListener("resize", this.onWindowResize);
	}

	manageEvents() {
		if (this.isMobileView) {
			this.initEvents();
		} else {
			this.removeEvents();
			this.hideBurgerMenu();
		}
	}

	initEvents() {
		this.burgerButton.addEventListener("click", this.onBurgerClick);
		this.body.addEventListener("click", this.onBodyClick);

		this.body.addEventListener("touchstart", this.handleTouchStart);
		this.body.addEventListener("touchmove", this.handleTouchMove);
		this.body.addEventListener("touchend", this.handleTouchEnd);
	}

	removeEvents() {
		this.burgerButton.removeEventListener("click", this.onBurgerClick);
		this.body.removeEventListener("click", this.onBodyClick);

		this.body.removeEventListener("touchstart", this.handleTouchStart);
		this.body.removeEventListener("touchmove", this.handleTouchMove);
		this.body.removeEventListener("touchend", this.handleTouchEnd);
	}

	onWindowResize() {
		const isNowMobileView = window.innerWidth <= this.config.BREAKPOINT;

		if (this.isMobileView !== isNowMobileView) {
			this.isMobileView = isNowMobileView;
			this.manageEvents();
		}
	}

	onBurgerClick() {
		const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);
		this.burgerButton.ariaLabel = isOpen
			? this.config.lABEL.CLOSE
			: this.config.lABEL.OPEN;
		this.burgerButton.ariaExpanded = isOpen;
		this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);
		this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, isOpen);

		// Исправлено: Проверяем this.main перед обращением к его стилям
		if (this.main) {
			this.main.style.pointerEvents = isOpen ? "none" : "";
		}

		if (this.headerFixedInstance) {
			if (isOpen) {
				this.headerFixedInstance.removeFixedClass();
			} else {
				this.headerFixedInstance.updateFixedClass();
			}
		}
	}

	hideBurgerMenu() {
		const wasOpen = this.isBurgerMenuOpen();
		this.burgerButton.classList.remove(this.config.BURGER_OPEN);
		this.burgerButton.ariaLabel = this.config.lABEL.OPEN;
		this.burgerButton.ariaExpanded = false;
		this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
		this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL);

		if (this.main) {
			this.main.style.pointerEvents = "";
		}

		if (wasOpen && this.headerFixedInstance) {
			this.headerFixedInstance.updateFixedClass();
		}
	}

	isBurgerMenuOpen() {
		return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN);
	}

	onBodyClick(event) {
		const target = event.target;
		const isLinkInMenu = target.classList.contains(this.config.MENU_LINK);
		const isMenuOpen = this.isBurgerMenuOpen();
		const isClickOutsideMenu =
			!target.closest(`.${this.config.HEADER_MENU}`) &&
			!target.closest(`.${this.config.BURGER}`);

		if (
			(isLinkInMenu && window.innerWidth <= this.config.BREAKPOINT) ||
			(isMenuOpen && isClickOutsideMenu)
		) {
			this.hideBurgerMenu();
		}
	}

	handleTouchStart(event) {
		if (!this.isBurgerMenuOpen()) return;
		this.touchStartX = event.changedTouches[0].screenX;
		this.burgerMenu.style.transition = "none";
	}

	handleTouchMove(event) {
		if (!this.isBurgerMenuOpen()) return;
		const currentX = event.changedTouches[0].screenX;
		const translateX = Math.max(0, currentX - this.touchStartX);
		this.burgerMenu.style.right = `-${translateX}px`;
	}

	handleTouchEnd(event) {
		if (!this.isBurgerMenuOpen()) return;
		const touchEndX = event.changedTouches[0].screenX;
		const swipeDistance = touchEndX - this.touchStartX;

		this.burgerMenu.style.transition = "";
		this.burgerMenu.style.right = "";

		if (swipeDistance > 70) {
			this.hideBurgerMenu();
		}
	}
}
