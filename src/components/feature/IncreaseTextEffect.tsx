import { useEffect } from "react";

interface Props {
    text: string;
    className?: string;
}

export default function IncreaseTextEffect({ text, className }: Props) {
    
    useEffect(() => {
        const letters = document.querySelectorAll('.effect__letter');

        letters.forEach((letter, index) => {
            letter.addEventListener('mouseover', () => {
                if (index > 0) {
                    letter.previousElementSibling?.classList.add('scale-110');
                    letter.previousElementSibling?.classList.add('tracking-wider');
                }

                if (index < letters.length - 1) {
                    letter.nextElementSibling?.classList.add('scale-110');
                    letter.nextElementSibling?.classList.add('tracking-wider');
                }
            });

            letter.addEventListener('mouseout', () => {
                if (index > 0) {
                    letter.previousElementSibling?.classList.remove('scale-110');
                    letter.previousElementSibling?.classList.remove('tracking-wider');
                }

                if (index < letters.length - 1) {
                    letter.nextElementSibling?.classList.remove('scale-110');
                    letter.nextElementSibling?.classList.remove('tracking-wider');
                }
            })
        });
    })

    const renderText = () => {
        let txt: Array<string> = text.toUpperCase().split('');
        return txt.map((t: string, index: number) => (<span className="effect__letter relative inline-block transition-all hover:scale-125 hover:tracking-wider" key={index}>{t}</span>))
    }

    return (
        <div className={`inline-block uppercase ${className || ''}`}>
            {renderText()}
        </div>
    )
}
