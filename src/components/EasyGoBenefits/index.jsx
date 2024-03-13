import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';

function EasyGoBenefits() {
  return (
    <div className='h-fit  lg:block lg:p-40 bg-slate-100'>
      <p className='w-fit mx-auto text-6xl my-8'>
        <span className='text-green-400'>EAZYGO</span> Benefits
      </p>

      {/* card 1 */}
      <div className='flex lg:bg-slate-50 h-fit lg:h-[200px] lg:w-9/12 gap-6 p-4 mx-auto mb-10 '>
        {/* part 1 */}
        <div className='flex flex-col gap-4 justify-center lg:min-h-full lg:w-7/12'>
          <div className='flex gap-3'>
            <p className='text-green-400 text-7xl lg:text-7xl/[5.2rem] font-extrabold'>01.</p>
            <p className='font-semibold italic text-3xl lg:text-4xl h-full'>
              Flexible <br /> working hours
            </p>
          </div>
          <img src={icon1} alt='' className='flex-1 lg:hidden' />
          <p className='self-start text-xl leading-tight text-slate-500'>
            You can decide when, and how much time <br /> you want to drive.
          </p>
        </div>
        <img src={icon1} alt='' className='flex-1 hidden lg:block' />
      </div>

      {/* card 2 */}
      <div className='flex lg:bg-slate-50 h-fit lg:h-[200px] lg:w-9/12 gap-10 p-4 lg:float-right mb-10 '>
        {/* part 1 */}
        <img src={icon2} alt='' className='flex-1 hidden lg:block' />
        <div className='flex flex-col gap-4 justify-center lg:min-h-full lg:w-7/12'>
          <div className='flex gap-3 item-center'>
            <p className='text-green-400 text-7xl/[5.2rem] font-extrabold'>02.</p>
            <p className='font-semibold italic text-3xl lg:text-4xl h-full'>Earnings</p>
          </div>
          <img src={icon2} alt='' className='flex-1 lg:hidden' />
          <p className='self-start text-xl leading-tight text-slate-500'>By driving with tere you can earn more.</p>
        </div>
      </div>

      {/* card 3 */}
      <div className='flex lg:bg-slate-50 h-fit lg:h-[200px] lg:w-9/12 gap-6 p-4 mx-auto mb-10 '>
        {/* part 1 */}
        <div className='flex flex-col gap-4 justify-center lg:min-h-full lg:w-7/12'>
          <div className='flex gap-3'>
            <p className='text-green-400 text-7xl lg:text-7xl/[5.2rem] font-extrabold'>03.</p>
            <p className='font-semibold italic text-3xl lg:text-4xl h-full'>
              Customer <br /> Support 24/7
            </p>
          </div>
          <img src={icon3} alt='' className='flex-1 lg:hidden' />
          <p className='self-start text-xl leading-tight text-slate-500'>
            EAZYGO is a local service provider and we are proud to support you in your local language. We are proud to
            be at your service 24/7!
          </p>
        </div>
        <img src={icon3} alt='' className='flex-1 hidden lg:block' />
      </div>
    </div>
  );
}

export default EasyGoBenefits;
