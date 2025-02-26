import img1 from '../assets/president-20af57a5.jpg'
import img2 from '../assets/cairo-47c1773a.jpg'
import img3 from '../assets/helwan-37cdb9d1.jpg'
import img4 from '../assets/general-e5243858.jpg'
function Heighboard() {
    let list = [{img: img1,name:'Mariam Mahmoud',title:'~President~'},{img: img2,name:'Abdullah Mohammed',title:'~Cairo coordinator~'},{img: img3,name:'Mazin Islam',title:'~Helwan coordinator~'},{img: img4,name:'Omar Ali',title:'~General coordinator~'}];
    return(
        <div className='pb-10'>
            <div className="text-center pt-10 justify-center place-items-center">
                <img className="rounded-[100%] w-52 h-52 " src={list[0].img} alt="" />
                <p className="font-bold text-[20px]">{list[0].name}</p>
                <p className="">{list[0].title}</p>
            </div>
            <div className='flex flex-col md:flex-row'>
            {list.slice(1).map((item, e) => (
    <div key={e} className="text-center p-10">
        <img className="rounded-[100%] w-52 h-52" src={item.img} alt={item.title} />
        <p className="font-bold text-[20px]">{item.name}</p>
        <p className="">{item.title}</p>
    </div>
))}
            </div>
        </div>
    )
}

export default Heighboard;