import Image from 'next/image'
import Link from 'next/link';
import Butten from '@/components/Butten';
// import {useState, useEffect} from 'react'

export const revalidate = 1800;

export default function Resultat() {


const data = require('./dummyData.json')
const violations = [...data.violations]
// const vi = violations.map((violation) => {

// })
// const critical = violations[0].impact
// console.log("Data is: ", data)
// console.log(critical)

    return (
    <>

    <section className="mx-auto px-0 my-10">
        <article className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <figure className="flex flex-col w-auto justify-end place-content-right gap-y-2 md:order-2">
                <Image className="w-auto object-contain" src="/dummyImg.svg" alt="Logo" width="300" height="300" />
                <h3 className='w-auto text-lg text-center'>Overall score</h3>
            </figure>
            <figure className="flex flex-col place-content-center gap-y-2 md:order-1">
                <h2 className="text-xl text-state-2">Din url er her: {data.url}</h2>
                <p className='text-pretty'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus provident doloribus ipsum aliquid autem quod blanditiis soluta facere quisquam distinctio, sequi voluptatum consectetur iure cum odit accusamus eligendi commodi. Ab.</p>
                <Image className="w-auto object-contain" src="/kea.webp" alt="Logo" width={data.screenshot.width} height={data.screenshot.height}/>
            </figure>
        </article>
    </section>

    <section className='flex flex-col gap-y-6 my-14 px-0'>
        <h2 className='text-2xl'>Fuld raport </h2>
        <details className='bg-state-3-light'>
            <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-3 after:content-[">"]'><div><span>{violations.length}</span> kritiske fejl</div></summary>
            <ul className='flex flex-col gap-y-8 p-6 my-3 mx-5'>
                <li className='flex flex-wrap gap-3 flex-row w-full justify-between'>
                    <div className='max-w-prose'>
                        <h3 className='text-lg'>{violations[0].description}</h3>
                        <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ratione soluta repudiandae enim id, distinctio officiis repellendus? Similique repellendus labore accusantium voluptatem itaque quos rerum maxime! Reprehenderit quasi expedita quae.</span>
                    </div>
                    <a href={violations[0].helpUrl} className='w-fit h-fit hover:bg-state-3 border-solid border-4 rounded border-state-3 px-5 py-2.5'>Læs mere om fejlen</a>
                </li>
                <li className='flex flex-wrap gap-3 flex-row w-full justify-between'>
                    <div className='max-w-prose'>
                        <h3 className='text-lg'>Fejl fejl!</h3>
                        <span className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, distinctio cupiditate. Corporis molestias veniam, doloremque nisi laudantium quisquam itaque minus sit adipisci sed dignissimos, error saepe explicabo, iste laborum. Corporis!</span>
                    </div>
                    <button className='w-fit h-fit hover:bg-state-3 border-solid border-4 rounded border-state-3 px-5 py-2.5'>Læs mere om fejlen</button>
                </li>
            </ul>
        </details>
        <details className='bg-state-2-light'>
            <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-2 after:content-[">"]'><div><span>XXX</span> moderate fejl</div></summary>
            <ul className='flex flex-col gap-y-6 p-6 my-3 mx-5'>
                <li className='flex flex-wrap gap-3 flex-row w-full justify-between'>
                    <div className='max-w-prose'>
                        <h3 className='text-lg'>Fejl fejl!</h3>
                        <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam aut commodi? Nam tenetur eos distinctio. Voluptatum ducimus dolore repellat eligendi alias adipisci deserunt fugit suscipit tempora, obcaecati sunt distinctio.</span>
                    </div>
                    <button className='w-fit h-fit hover:bg-state-2 bg-state-2-light border-solid border-4 rounded border-state-2 px-5 py-2.5'>Læs mere om fejlen</button>
                </li>
                <li className='flex flex-wrap gap-3 flex-row w-full justify-between'>
                    <div className='max-w-prose'>
                        <h3 className='text-lg'>Fejl fejl!</h3>
                        <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias dolore animi distinctio illo. Deleniti tenetur ea et, sunt, quas voluptas quo error ducimus eaque corporis magnam laborum dicta laboriosam?</span>
                    </div>
                    <button className='w-fit h-fit hover:bg-state-2 bg-state-2-light border-solid border-4 rounded border-state-2 px-5 py-2.5'>Læs mere om fejlen</button>
                </li>
            </ul>
        </details>
        <details className='bg-state-1-light'>
            <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-1 after:content-[">"]'><div><span>XXX</span> mindre fejl</div></summary>
            <ul className='flex flex-col gap-y-6 p-6 my-3 mx-5'>
                <li className='flex flex-wrap gap-3 flex-row w-full justify-between'>
                    <div className='max-w-prose'>
                        <h3 className='text-lg'>Fejl fejl!</h3>
                        <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nam necessitatibus quo repellat fugit amet! Ducimus dicta eos, obcaecati doloribus quaerat amet nobis voluptas, qui ex libero fugiat voluptates perspiciatis!</span>
                    </div>
                    <button className='w-fit h-fit border-solid border-4 rounded border-state-1 hover:bg-state-1 px-5 py-2.5'>Læs mere om fejlen</button>
                </li>
                <li className='flex flex-wrap gap-3 flex-row w-full justify-between'>
                    <div className='max-w-prose'>
                        <h3 className='text-lg'>Fejl fejl!</h3>
                        <span className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum odit amet ad distinctio quaerat dolore animi, tempora omnis consequatur. Quidem tempora sapiente doloribus obcaecati vero autem libero voluptates quis officia.</span>
                    </div>
                    <button className='w-fit h-fit border-solid border-4 rounded border-state-1 hover:bg-state-1 px-5 py-2.5'>Læs mere om fejlen</button>
                </li>
            </ul>
        </details>
    </section>

    </>
)
}
