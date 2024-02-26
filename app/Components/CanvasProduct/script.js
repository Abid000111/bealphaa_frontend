function loco() {
	gsap.registerPlugin(ScrollTrigger);

	// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("#main"),
		smooth: true
	});
	// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
	locoScroll.on("scroll", ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
	ScrollTrigger.scrollerProxy("#main", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: document.querySelector("#main").style.transform
			? "transform"
			: "fixed"
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();
}

loco();

function canvas() {
	const canvas = document.querySelector("canvas");
	const context = canvas.getContext("2d");

	canvas.width = (40 * window.innerWidth) / 100;
	canvas.height = (100 * window.innerHeight) / 100;

	window.addEventListener("resize", function () {
		canvas.width = (60 * window.innerWidth) / 100;
		canvas.height = (70 * window.innerHeight) / 100;
		render();
	});

	function files(index) {
		var data = `
        /frontend/public/Screenshot139.png
        /frontend/public/Screenshot140.png
        /frontend/public/Screenshot141.png
        /frontend/public/Screenshot142.png
        /frontend/public/Screenshot143.png
        /frontend/public/Screenshot144.png
        /frontend/public/Screenshot145.png
        /frontend/public/Screenshot146.png
        /frontend/public/Screenshot147.png
        /frontend/public/Screenshot148.png
        /frontend/public/Screenshot149.png
        /frontend/public/Screenshot150.png
        /frontend/public/Screenshot151.png
        /frontend/public/Screenshot152.png
        /frontend/public/Screenshot153.png
        /frontend/public/Screenshot154.png
        /frontend/public/Screenshot155.png
        /frontend/public/Screenshot156.png
        /frontend/public/Screenshot157.png
        /frontend/public/Screenshot158.png
        /frontend/public/Screenshot159.png
        /frontend/public/Screenshot160.png
        /frontend/public/Screenshot161.png
        /frontend/public/Screenshot162.png
        /frontend/public/Screenshot163.png
        /frontend/public/Screenshot164.png
        /frontend/public/Screenshot165.png
        /frontend/public/Screenshot166.png
        `;
		return data.split("\n")[index];
	}

	const frameCount = 28;

	const images = [];
	const imageSeq = {
		frame: 1
	};

	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = files(i);
		images.push(img);
	}

	gsap.to(imageSeq, {
		frame: frameCount - 1,
		snap: "frame",
		ease: `none`,
		scrollTrigger: {
			scrub: 0.5,
			trigger: `#page`,
			//   set start end according to preference
			// markers: true,
			start: `top top`,
			end: `200% top`,
			scroller: `#main`
		},
		onUpdate: render
	});

	images[1].onload = render;

	function render() {
		scaleImage(images[imageSeq.frame], context);
	}

	function scaleImage(img, ctx) {
		var canvas = ctx.canvas;
		var hRatio = canvas.width / img.width;
		var vRatio = canvas.height / img.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 2;
		var centerShift_y = (canvas.height - img.height * ratio) / 2;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			img,
			0,
			0,
			img.width,
			img.height,
			centerShift_x,
			centerShift_y,
			img.width * ratio,
			img.height * ratio
		);
	}
	ScrollTrigger.create({
		trigger: "#page",
		pin: true,
		// markers:true,
		scroller: `#main`,
		//   set start end according to preference
		start: `top top`,
		end: `200% top`
	});
}
canvas();