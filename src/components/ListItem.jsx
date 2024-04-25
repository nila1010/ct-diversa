import Butten from "./Butten";
export default function ListItem() {
    return (
    <li className='flex flex-wrap gap-3 flex-row w-full justify-between items-center'>
        <div className='max-w-prose'>
            <h3 className='text-lg'>Dit fejl</h3>
            <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ratione soluta repudiandae enim id, distinctio officiis repellendus? Similique repellendus labore accusantium voluptatem itaque quos rerum maxime! Reprehenderit quasi expedita quae.</span>
        </div>
        <Butten variant="input">Læs mere om fejlen</Butten>
    </li>
    );
}