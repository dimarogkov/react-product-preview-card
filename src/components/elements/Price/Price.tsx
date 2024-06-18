import { ProdPrice } from '../../../types/ProdPrice';

type Props = {
    price: ProdPrice;
    className?: string;
};

export const Price: React.FC<Props> = ({ price, className = '' }) => {
    const { newPrice, oldPrice } = price;

    return (
        <div className={`relative flex items-center gap-[24px] sm:gap-[28px] w-full ${className}`}>
            <span className='font-bold text-[30px] sm:text-[32px] font-fraunces text-[#3c8067]'>{`$${newPrice}`}</span>
            <span className='font-medium line-through text-[15px] sm:text-[16px] text-[#6c7289]'>{`$${oldPrice}`}</span>
        </div>
    );
};
