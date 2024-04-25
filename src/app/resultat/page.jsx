import Image from 'next/image'
import ListItem from '@/components/ListItem';

export const revalidate = 1800;

export default function Resultat() {

    return (
    <>
        <section className="mx-auto px-0 my-10">
            <article className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                <figure className="flex flex-col w-auto justify-end place-content-right gap-y-2 md:order-2">
                    <Image className="w-auto object-contain" src="/dummyImg.svg" alt="Logo" width="300" height="300" />
                    <h3 className='w-auto text-lg text-center'>Overall score</h3>
                </figure>
                <figure className="flex flex-col place-content-center gap-y-2 md:order-1">
                    <h2 className="text-xl text-state-2">Din url er her: Data</h2>
                    <p className='text-pretty'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus provident doloribus ipsum aliquid autem quod blanditiis soluta facere quisquam distinctio, sequi voluptatum consectetur iure cum odit accusamus eligendi commodi. Ab.</p>
                    <Image className="w-auto object-contain" src="/kea.webp" alt="Logo" width={640} height={480}/>
                </figure>
            </article>
        </section>

        <section className='flex flex-col gap-y-6 my-14 px-0'>
            <h2 className='text-2xl'>Fuld raport </h2>
            <details className='bg-state-3-light'>
                <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-3 after:content-[">"]'><div><span>XXX</span> kritiske fejl</div></summary>
                <ul className='flex flex-col gap-y-8 p-6 my-3 mx-5'>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </ul>
            </details>
            <details className='bg-state-2-light'>
                <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-2 after:content-[">"]'><div><span>XXX</span> moderate fejl</div></summary>
                <ul className='flex flex-col gap-y-6 p-6 my-3 mx-5'>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </ul>
            </details>
            <details className='bg-state-1-light'>
                <summary className='flex gap-3 justify-between text-xl p-6 border-solid border-4 rounded border-state-1 after:content-[">"]'><div><span>XXX</span> mindre fejl</div></summary>
                <ul className='flex flex-col gap-y-6 p-6 my-3 mx-5'>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </ul>
            </details>
        </section>
    </>
)
}
