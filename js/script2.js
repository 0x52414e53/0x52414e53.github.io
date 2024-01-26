const { createApp } = Vue;

createApp({
    data() {
    return {
        cards: [
        {
            id: 1,
            title: "SSC PHCP VOTING SYSTEM IN JAVA",
            desc:
            "FINAL PROJECT IN PROGRAMMING 2 SUBJECT. A voting system for SSC PHCP using Java and MySQL.",
            photo:
            "/images/projects/project1.png"
        },
        {
            id: 2,
            title: "VB NET PHCP ATTENDANCE MONITORING SYSTEM",
            desc:
            "Final Project in Database 2 subject. Classroom Attendance Monitoring System using VB.NET and MySQL.",
            photo:
            "/images/projects/project2.png"
        },
        //add 1 cards
        {
            id: 3,
            title: "My Personal Portfolio website",
            desc:
            "A personal portfolio website using HTML, CSS, JS and BOOTSTRAP",
            photo:
            "/images/projects/project3.png"
        }
        ],
        currentNum: 0
        };
    },
    computed: {
        currentCard() {
        return this.cards[this.currentNum];
        }
    },
    methods: {
        playFoward() {
        let tl = gsap.timeline({
            defaults: {
            duration: 0.7,
            ease: "sine.out"
            },
            onComplete: () => {
            this.playReverse();
            if (this.currentNum >= this.cards.length - 1) {
                this.currentNum = 0;
            } else {
                this.currentNum++;
            }
            }
        });
        tl.to("#mask-1", {
            yPercent: 100,
            scaleY: 1.4
        })
            .to(
            "#mask-2",
            {
                yPercent: -100,
                scaleY: 1.4
            },
            "<"
            )
            .to(
            "#card-info-title",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
            },
            "<0.4"
            )
            .to(
            "#card-info-desc",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
            },
            "<0.3"
            );
        },
        playReverse() {
        let tl = gsap.timeline({
            defaults: {
            duration: 0.7,
            ease: "sine.in"
            }
        });
        tl.to("#mask-1", {
            yPercent: -100,
            scaleY: 1.4
        })
            .to(
            "#mask-2",
            {
                yPercent: 100,
                scaleY: 1.4
            },
            "<"
            )
            .to(
            "#card-info-title",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
            },
            "<0.2"
            )
            .to(
            "#card-info-desc",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
            },
            "<0.3"
            );
        },
        nextCard() {
        this.playFoward();
        }
    }
    }).mount("#app");
