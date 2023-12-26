"use client";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";

const AnimatedChristmasTree = ({ play }: { play: boolean }) => {
  const treeRef = useRef(null);

  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (play) {
        const speed = gsap.utils.random(1, 5);
        const stagger = gsap.utils.random(0.1, 0.5);
        tl.current = gsap
          .timeline({ repeat: -1, repeatRefresh: true, yoyo: true })
          .addLabel("start")
          .fromTo(
            ".ornament-green",
            { opacity: 1 },
            {
              opacity: 0,
              duration: speed,
              stagger,
              repeatRefresh: true,
            },
            "start",
          )
          .fromTo(
            ".ornament-yellow",
            { opacity: 1 },
            {
              opacity: 0,
              duration: speed,
              stagger,
              delay: 0.5,
              repeatRefresh: true,
            },
            "start",
          )
          .fromTo(
            ".ornament-red",
            { opacity: 1 },
            {
              opacity: 0,
              duration: speed,
              stagger,
              delay: 1,
              repeatRefresh: true,
            },
            "start",
          )
          .to(
            "#star",
            {
              rotate: 360,
              duration: gsap.utils.random(0.1, 10),
              ease: "inOut",
              transformOrigin: "center center",
              repeatRefresh: true,
            },
            "start",
          );
      }
    }, treeRef);
    return () => ctx.revert();
  }, [play]);

  return (
    <div ref={treeRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 36 36"
        className="w-full"
      >
        <path
          fill="#662113"
          d="M22.088 32.83c0 1.997-1.619 2.712-3.616 2.712s-3.616-.715-3.616-2.712l.904-8.136c0-1.996.715-1.808 2.712-1.808 1.997 0 2.712-.188 2.712 1.808l.904 8.136z"
        />
        <path
          fill="#5C913B"
          d="M30.59 27.675c-6.294-5.392-8.843-13.112-12.118-13.112s-5.824 7.721-12.118 13.112c-2.645 2.266-1.385 3.577 2.241 3.314 3.232-.233 6.255-.966 9.877-.966s6.646.733 9.876.966c3.627.263 4.886-1.049 2.242-3.314z"
        />
        <path
          fill="#3E721D"
          d="M28.546 25.538c-4.837-4.435-7.555-10.787-10.074-10.787-2.517 0-5.236 6.352-10.073 10.787-3.844 3.524 5.037 4.315 10.073 0 5.034 4.316 13.917 3.524 10.074 0z"
        />
        <path
          fill="#5C913B"
          d="M28.546 21.945c-4.837-4.143-7.555-10.077-10.074-10.077-2.517 0-5.236 5.934-10.073 10.077-3.844 3.292 5.037 4.031 10.073 0 5.034 4.032 13.917 3.292 10.074 0z"
        />
        <path
          fill="#3E721D"
          d="M26.336 19.003c-3.775-3.235-5.897-7.868-7.864-7.868-1.965 0-4.088 4.632-7.864 7.868-3 2.57 3.932 3.147 7.864 0 3.93 3.146 10.865 2.57 7.864 0z"
        />
        <path
          fill="#5C913B"
          d="M26.336 16.311c-3.775-3.235-5.897-7.867-7.864-7.867-1.965 0-4.088 4.632-7.864 7.867-3 2.571 3.932 3.147 7.864 0 3.93 3.147 10.865 2.571 7.864 0z"
        />
        <path
          fill="#3E721D"
          d="M24.818 13.92c-3.047-2.61-4.76-6.349-6.347-6.349-1.586 0-3.299 3.739-6.347 6.349-2.422 2.075 3.174 2.54 6.347 0 3.174 2.54 8.77 2.075 6.347 0z"
        />
        <path
          fill="#5C913B"
          d="M24.818 11.894c-3.047-2.61-4.76-6.349-6.347-6.349-1.586 0-3.299 3.739-6.347 6.349-2.422 2.075 3.174 2.54 6.347 0 3.174 2.54 8.77 2.075 6.347 0z"
        />
        <circle
          className="ornament-green"
          cx="23.453"
          cy="12.068"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="24.938"
          cy="19.268"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="18.863"
          cy="28.133"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="15.218"
          cy="26.153"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="10.808"
          cy="20.393"
          r=".368"
          fill="#a6d388"
        />
        <path
          fill="#3E721D"
          d="M23.301 8.911C20.983 6.925 19.68 4.08 18.472 4.08c-1.207 0-2.511 2.845-4.83 4.831-1.843 1.579 2.415 1.933 4.83 0 2.414 1.933 6.673 1.579 4.829 0z"
        />
        <path
          fill="#5C913B"
          d="M23.301 7.832C20.983 5.845 19.68 3 18.472 3c-1.207 0-2.511 2.845-4.83 4.832-1.843 1.579 2.415 1.933 4.83 0 2.414 1.932 6.673 1.578 4.829 0z"
        />
        <circle
          className="ornament-yellow"
          cx="16.5"
          cy="12.042"
          r="1.5"
          fill="#FFCC4D"
        />
        <circle
          className="ornament-yellow"
          cx="20"
          cy="25"
          r="2"
          fill="#FFCC4D"
        />
        <circle
          className="ornament-yellow"
          cx="27.239"
          cy="28.091"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="22.268"
          cy="20.005"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="16.588"
          cy="8.801"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="21.859"
          cy="7.939"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="12.721"
          cy="22.875"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="17.787"
          cy="18.991"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="21.63"
          cy="22.17"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="13.62"
          cy="12.63"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-yellow"
          cx="10.29"
          cy="22.62"
          r=".48"
          fill="#ffcc4d"
        />
        <circle
          className="ornament-red"
          cx="22.5"
          cy="15.5"
          r="2.5"
          fill="#DD2E44"
        />
        <circle
          className="ornament-red"
          cx="17.121"
          cy="21.967"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="13.462"
          cy="15.478"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="21.368"
          cy="10.472"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="14.825"
          cy="27.932"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="8.382"
          cy="29.487"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="19.812"
          cy="18.642"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="19.092"
          cy="9.237"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="25.662"
          cy="26.697"
          r=".642"
          fill="#dd2e44"
        />
        <circle
          className="ornament-red"
          cx="29.982"
          cy="29.487"
          r=".642"
          fill="#dd2e44"
        />
        <circle className="ornament-red" cx="10" cy="26" r="2" fill="#DD2E44" />
        <circle
          className="ornament-green"
          cx="14"
          cy="19"
          r="2"
          fill="#A6D388"
        />
        <circle
          className="ornament-green"
          cx="26"
          cy="23"
          r="2"
          fill="#A6D388"
        />
        <circle
          className="ornament-green"
          cx="23.733"
          cy="27.529"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="14.592"
          cy="24.542"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="16.322"
          cy="16.146"
          r=".368"
          fill="#a6d388"
        />
        <circle
          className="ornament-green"
          cx="19.313"
          cy="12.293"
          r=".368"
          fill="#a6d388"
        />
        <path
          id="star"
          fill="#FFAC33"
          d="M19.379 1.679c.143.275.512.549.817.609l1.379.269c.305.06.377.29.159.512l-.983 1.004c-.217.222-.365.657-.326.965l.17 1.394c.038.309-.159.448-.438.31L18.9 6.117c-.279-.138-.738-.144-1.02-.013l-1.274.594c-.282.13-.476-.014-.43-.322l.205-1.39c.045-.307-.091-.745-.302-.973l-.959-1.027c-.212-.227-.135-.457.172-.508l1.385-.234c.307-.051.681-.316.832-.588L18.19.427c.151-.272.394-.269.537.006l.652 1.246z"
        />
      </svg>
    </div>
  );
};

export default AnimatedChristmasTree;
