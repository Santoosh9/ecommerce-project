import React from 'react';
import UserNav from '../layout/UserNav';
import { Card, Typography } from '@material-tailwind/react';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';
import { AiFillFilePdf } from 'react-icons/ai';
import dummypdf from '../../Assets/dummy.pdf';

const CurrentOffiars = () => {
  const HEAD = ['SN', 'Title', 'Date', 'Download'];

  function isEven(number) {
    return number % 2 === 0;
  }

  const data = [
    {
      sn: 1,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 2,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 3,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,   पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 4,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 5,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 6,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 7,
      titel: 'सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 8,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 9,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 10,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
  ];
  return (
    <>
      <UserNav />

      <div
        className="h-[150px] "
        style={{
          backgroundImage: `url(${'./images/header.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col ml-4 tablet:ml-20  font-Poppins ">
          <p className=" font-[500]  text-3xl text-white  mt-10">
            All Current Affairs
          </p>
          <p className="mt-2 text-white	 font-[300] text-xl">
            Get updated with all current affairs
          </p>
        </div>
      </div>

      <div className="w-[90%] h-fit rounded-2xl mx-auto my-10 border ">
        <div className="hidden tablet:flex items-center justify-around w-full h-12 bg-[#006EB91C] px-4 py-2 rounded-t-2xl">
          <p className="text-[#006EB9] text-base font-medium leading-5 w-[5%] text-left">
            SN
          </p>
          <p className="text-[#006EB9] text-base font-medium leading-5 w-[60%] text-left">
            Title
          </p>
          <p className="hidden tablet:block text-[#006EB9] text-base font-medium leading-5 w-[20%] text-center">
            Date
          </p>
          <p className="hidden tablet:block text-[#006EB9] text-base font-medium leading-5 w-[20%] text-center">
            Download
          </p>
        </div>
        {data.map((onedata, index) => (
          <div
            className={
              !isEven(onedata.sn)
                ? 'w-full h-fit bg-[#F9F9F9] border-t border-b'
                : 'w-full h-fit'
            }
          >
            <div className="flex flex-col tablet:flex-row w-full h-fit py-4 gap-2">
              <div className="w-full tablet:w-[65%] flex justify-around">
                <p className="w-[10%] text-center">{onedata.sn}</p>
                <p className="w-[90%] px-2">{onedata.titel}</p>
              </div>
              <div className="flex justify-around w-full tablet:w-[40%]">
                <p className="w-1/2 text-center">{onedata.date}</p>
                <div className="w-1/2 flex items-center justify-center gap-1">
                  <AiFillFilePdf className="text-red-600 w-[16.5px] h-[21px] flex items-center" />
                  <a href={dummypdf}>
                    <p className="">{onedata.text}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooetRecently />
      <Footer />
    </>
  );
};

export default CurrentOffiars;
