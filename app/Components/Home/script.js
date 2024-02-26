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
        /frontend/public/1.jpg
        /frontend/public/2.jpg
        /frontend/public/3.jpg
        /frontend/public/4.jpg
        /frontend/public/5.jpg
        /frontend/public/6.jpg
        /frontend/public/7.jpg
        /frontend/public/8.jpg
        /frontend/public/9.jpg
        /frontend/public/10.jpg
        /frontend/public/11.jpg
        /frontend/public/12.jpg
        /frontend/public/13.jpg
        /frontend/public/14.jpg
        /frontend/public/15.jpg
        /frontend/public/16.jpg
        /frontend/public/17.jpg
        /frontend/public/18.jpg
        /frontend/public/19.jpg
        /frontend/public/20.jpg
        /frontend/public/21.jpg
        /frontend/public/22.jpg
        /frontend/public/23.jpg
        /frontend/public/24.jpg
        /frontend/public/25.jpg
        /frontend/public/26.jpg
        /frontend/public/27.jpg
        /frontend/public/28.jpg
		/frontend/public/29.jpg
        /frontend/public/30.jpg
        /frontend/public/31.jpg
        /frontend/public/32.jpg
        /frontend/public/33.jpg
        /frontend/public/34.jpg
        /frontend/public/35.jpg
        /frontend/public/36.jpg
        /frontend/public/37.jpg
        /frontend/public/38.jpg
        /frontend/public/39.jpg
        /frontend/public/40.jpg
        /frontend/public/41.jpg
        /frontend/public/42.jpg
        /frontend/public/43.jpg
        /frontend/public/44.jpg
        /frontend/public/45.jpg
        /frontend/public/46.jpg
        /frontend/public/47.jpg
        /frontend/public/48.jpg
        /frontend/public/49.jpg
        /frontend/public/50.jpg
        /frontend/public/51.jpg
        /frontend/public/52.jpg
        /frontend/public/53.jpg
        /frontend/public/54.jpg
        /frontend/public/55.jpg
        /frontend/public/56.jpg
        /frontend/public/57.jpg
        /frontend/public/58.jpg
        /frontend/public/59.jpg
        /frontend/public/60.jpg
        /frontend/public/61.jpg
        /frontend/public/62.jpg
        /frontend/public/63.jpg
        /frontend/public/64.jpg
        /frontend/public/65.jpg
        /frontend/public/66.jpg
        /frontend/public/67.jpg
        /frontend/public/68.jpg
        /frontend/public/69.jpg
        /frontend/public/70.jpg
        /frontend/public/71.jpg
        /frontend/public/72.jpg
        /frontend/public/73.jpg
        /frontend/public/74.jpg
        /frontend/public/75.jpg
        /frontend/public/76.jpg
        /frontend/public/77.jpg
        /frontend/public/78.jpg
        /frontend/public/79.jpg
        /frontend/public/80.jpg
        /frontend/public/81.jpg
        /frontend/public/82.jpg
        /frontend/public/83.jpg
        /frontend/public/84.jpg
        /frontend/public/85.jpg
        /frontend/public/86.jpg
        /frontend/public/87.jpg
        /frontend/public/88.jpg
        /frontend/public/89.jpg
        /frontend/public/90.jpg
        /frontend/public/91.jpg
        /frontend/public/92.jpg
        /frontend/public/93.jpg
        /frontend/public/94.jpg
        /frontend/public/95.jpg
        /frontend/public/96.jpg
        /frontend/public/97.jpg
        /frontend/public/98.jpg
        /frontend/public/99.jpg
        /frontend/public/101.jpg
        /frontend/public/102.jpg
        /frontend/public/103.jpg
        /frontend/public/104.jpg
        /frontend/public/105.jpg
        /frontend/public/106.jpg
        /frontend/public/107.jpg
        /frontend/public/108.jpg
        /frontend/public/109.jpg
        /frontend/public/110.jpg
        /frontend/public/111.jpg
        /frontend/public/112.jpg
        /frontend/public/113.jpg
        /frontend/public/114.jpg
        /frontend/public/115.jpg
        /frontend/public/116.jpg
        /frontend/public/117.jpg
        /frontend/public/118.jpg
        /frontend/public/119.jpg
        /frontend/public/120.jpg
        /frontend/public/121.jpg
        /frontend/public/122.jpg
        /frontend/public/123.jpg
        /frontend/public/124.jpg
        /frontend/public/125.jpg
        /frontend/public/126.jpg
        /frontend/public/127.jpg
        /frontend/public/128.jpg
        /frontend/public/129.jpg
        /frontend/public/130.jpg
        /frontend/public/131.jpg
        /frontend/public/132.jpg
        /frontend/public/133.jpg
        /frontend/public/134.jpg
        /frontend/public/135.jpg
        /frontend/public/136.jpg
        /frontend/public/137.jpg
        /frontend/public/138.jpg
        /frontend/public/139.jpg
        /frontend/public/140.jpg
        /frontend/public/141.jpg
        /frontend/public/142.jpg
        /frontend/public/143.jpg
        /frontend/public/144.jpg
        /frontend/public/145.jpg
        /frontend/public/146.jpg
        /frontend/public/147.jpg
        /frontend/public/148.jpg
        /frontend/public/149.jpg
        /frontend/public/150.jpg
        /frontend/public/151.jpg
        /frontend/public/152.jpg
        /frontend/public/153.jpg
        /frontend/public/154.jpg
        /frontend/public/155.jpg
        /frontend/public/156.jpg
        /frontend/public/157.jpg
        /frontend/public/158.jpg
        /frontend/public/159.jpg
        /frontend/public/160.jpg
        /frontend/public/161.jpg
        /frontend/public/162.jpg
        /frontend/public/163.jpg
        /frontend/public/164.jpg
        /frontend/public/165.jpg
        /frontend/public/166.jpg
        /frontend/public/167.jpg
        /frontend/public/168.jpg
        /frontend/public/169.jpg
        /frontend/public/170.jpg
        /frontend/public/171.jpg
        /frontend/public/172.jpg
        /frontend/public/173.jpg
        /frontend/public/174.jpg
        /frontend/public/175.jpg
        /frontend/public/176.jpg
        /frontend/public/177.jpg
        /frontend/public/178.jpg
        /frontend/public/179.jpg
        /frontend/public/180.jpg
        `;
		return data.split("\n")[index];
	}

	const frameCount = 180;

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
			trigger: `canvas`,
			//   set start end according to preference
			// markers: true,
			start: `top top`,
			end: `500% top`,
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
		end: `500% top`
	});
}
canvas();


// /41.jpg
// /42.jpg
// /43.jpg
// /44.jpg
// /45.jpg
// /46.jpg
// /47.jpg
// /48.jpg
// /49.jpg
// /50.jpg
// /51.jpg
// /52.jpg
// /53.jpg
// /54.jpg
// /55.jpg
// /56.jpg
// /57.jpg
// /58.jpg
// /59.jpg
// /60.jpg
// /61.jpg
// /62.jpg
// /63.jpg
// /64.jpg
// /65.jpg
// /66.jpg
// /67.jpg
// /68.jpg
// /69.jpg
// /70.jpg
// /71.jpg
// /72.jpg
// /73.jpg
// /74.jpg
// /75.jpg
// /76.jpg
// /77.jpg
// /78.jpg
// /79.jpg
// /80.jpg
// /81.jpg
// /82.jpg
// /83.jpg
// /84.jpg
// /85.jpg
// /86.jpg
// /87.jpg
// /88.jpg
// /89.jpg
// /90.jpg
// /91.jpg
// /92.jpg
// /93.jpg
// /94.jpg
// /95.jpg
// /96.jpg
// /97.jpg
// /98.jpg
// /99.jpg
// /101.jpg
// /102.jpg
// /103.jpg
// /104.jpg
// /105.jpg
// /106.jpg
// /107.jpg
// /108.jpg
// /109.jpg
// /110.jpg
// /111.jpg
// /112.jpg
// /113.jpg
// /114.jpg
// /115.jpg
// /116.jpg
// /117.jpg
// /118.jpg
// /119.jpg
// /120.jpg
// /121.jpg
// /122.jpg
// /123.jpg
// /124.jpg
// /125.jpg
// /126.jpg
// /127.jpg
// /128.jpg
// /129.jpg
// /130.jpg
// /131.jpg
// /132.jpg
// /133.jpg
// /134.jpg
// /135.jpg
// /136.jpg
// /137.jpg
// /138.jpg
// /139.jpg
// /140.jpg
// /141.jpg
// /142.jpg
// /143.jpg
// /144.jpg
// /145.jpg
// /146.jpg
// /147.jpg
// /148.jpg
// /149.jpg
// /150.jpg
// /151.jpg
// /152.jpg
// /153.jpg
// /154.jpg
// /155.jpg
// /156.jpg
// /157.jpg
// /158.jpg
// /159.jpg
// /160.jpg
// /161.jpg
// /162.jpg
// /163.jpg
// /164.jpg
// /165.jpg
// /166.jpg
// /167.jpg
// /168.jpg
// /169.jpg
// /170.jpg
// /171.jpg
// /172.jpg
// /173.jpg
// /174.jpg
// /175.jpg
// /176.jpg
// /177.jpg
// /178.jpg
// /179.jpg
// /180.jpg