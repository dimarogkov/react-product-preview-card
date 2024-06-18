import { ProdImg } from '../../../types/ProdImg';

type Props = {
    img: ProdImg;
};

export const Img: React.FC<Props> = ({ img }) => {
    return (
        <div className='relative w-full md:w-[50%] h-0 pb-[70%] sm:pb-[50%] md:pb-[75%] bg-[#6c7289]'>
            <img
                src={img.src}
                alt={img.alt}
                className='absolute top-0 left-0 w-full h-full object-cover object-center'
            />
        </div>
    );
};
