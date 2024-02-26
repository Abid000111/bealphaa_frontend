// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap/dist/gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CanvasComponent = (props) => {
// 	const pageRef = useRef(null);
// 	const mainRef = useRef(null);
// 	const canvasRef = useRef(null);

// 	useEffect(() => {
// 		const canvas = canvasRef.current;
// 		const context = canvas.getContext("2d");

// 		canvas.width = (40 * window.innerWidth) / 100;
// 		canvas.height = (100 * window.innerHeight) / 100;

// 		window.addEventListener("resize", function () {
// 			canvas.width = (60 * window.innerWidth) / 100;
// 			canvas.height = (70 * window.innerHeight) / 100;
// 			render();
// 		});

// 		function files(index) {
// 			var data = `
//             https://raw.githubusercontent.com/Abid000111/images_beAlphaa/main/1.jpg
//             https://raw.githubusercontent.com/Abid000111/images_beAlphaa/main/2.jpg
//             `;
// 			return data.split("\n")[index];
// 		}
// // /1.jpg
// //             /2.jpg
// //             /3.jpg
// //             /4.jpg
// //             /5.jpg
// //             /6.jpg
// //             /7.jpg
// //             /8.jpg
// //             /9.jpg
// //             /10.jpg
// 		const frameCount = 2;

// 		const images = [];
// 		const imageSeq = {
// 			frame: 1
// 		};

// 		for (let i = 0; i < frameCount; i++) {
// 			const img = new Image();
// 			img.src = files(i);
// 			images.push(img);
// 		}

// 		// const resizeCanvas = () => {
// 		// 	canvas.width = (40 * window.innerWidth) / 100;
// 		// 	canvas.height = (100 * window.innerHeight) / 100;
// 		// 	console.log("abcd");
// 		// 	render();
// 		// };

// 		// resizeCanvas();

// 		// window.addEventListener("resize", resizeCanvas);

// 		gsap.to(imageSeq, {
// 			frame: frameCount - 1,
// 			snap: "frame",
// 			ease: `none`,
// 			scrollTrigger: {
// 				scrub: 0.5,
// 				// trigger: pageRef.current,
// 				trigger: canvasRef.current,
// 				// trigger: "body",
// 				//   set start end according to preference
// 				// markers: true,
// 				start: `top top`,
// 				end: `20% top`
// 			},
// 			onUpdate: render
// 		});

// 		images[1].onload = render;

// 		function render() {
// 			scaleImage(images[imageSeq.frame], context);
// 		}

// 		function scaleImage(img, ctx) {
// 			var canvas = ctx.canvas;
// 			var hRatio = canvas.width / img.width;
// 			var vRatio = canvas.height / img.height;
// 			var ratio = Math.max(hRatio, vRatio);
// 			var centerShift_x = (canvas.width - img.width * ratio) / 2;
// 			var centerShift_y = (canvas.height - img.height * ratio) / 2;
// 			ctx.clearRect(0, 0, canvas.width, canvas.height);
// 			ctx.drawImage(
// 				img,
// 				0,
// 				0,
// 				img.width,
// 				img.height,
// 				centerShift_x,
// 				centerShift_y,
// 				img.width * ratio,
// 				img.height * ratio
// 			);
// 		}

// 		ScrollTrigger.create({
// 			trigger: pageRef.current,
// 			pin: true,
// 			// markers:true,
// 			//   set start end according to preference
// 			start: `top top`,
// 			end: `20% top`
// 		});
// 	});

// 	return (
// 		<>
// 			<div id="body" {...props}>
// 				<div id="main" ref={mainRef}>
// 					<div id="page" ref={pageRef}>
// 						<canvas ref={canvasRef}></canvas>
// 						{/* <img src="/1.jpg"/> */}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default CanvasComponent;

// // the trigger: pageRef.current and pin: true, is not working which should pin the pageRef.current so the pageRef be fixed when scrolling .
