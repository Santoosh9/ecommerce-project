import React from 'react';
import UserNav from '../layout/UserNav';
import { Card, Typography } from '@material-tailwind/react';
import FooetRecently from '../layout/Foorerreseltly';
import Footer from '../layout/Footer';
import { AiFillFilePdf } from 'react-icons/ai';


const CurrentOffiars = () => {
  const HEAD = ['SN', 'Title', 'Date', 'Download'];

  const data = [
    {
      sn: 1,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
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
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
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
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 7,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 8,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
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
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,',
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
        <div className="flex flex-col  ml-20  font-Poppins ">
          <p className=" font-[500]  text-3xl text-white  mt-10">
            All Current Affairs
          </p>
          <p className="mt-2 text-white	 font-[300] text-xl">
            Get updated with all current affairs
          </p>
        </div>
      </div>

      <Card className="  ml-20 mr-20 mt-10 mb-10 border ">
        <table className="">
          <thead>
            <tr className="border  border-blue-gray-100 bg-[rgba(0,110,185,0.11)] p-4 h-[48px]">
              {HEAD.map((head) => (
                <th key={head} className=" ">
                  <Typography
                    variant="small"
                    className=" leading-none opacity-70  font-Poppins text-base font-[500] text-[rgba(0,110,185,1)] ml-6"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ sn, titel, date, image, text }, index) => (
              <tr
                key={sn}
                className=" text-[rgba(44,39,36,0.75)] font-[400]  font-Poppins text-base"
              >
                <td className="p-4 w-[62px]">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {sn}
                  </Typography>
                </td>
                <td className="p-4 w-[791px]">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {titel}
                  </Typography>
                </td>
                <td className="p-4 w-[157px]">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className="p-4 w-[173px] flex flex-row ">
                  <Typography className="flex flex-row gap-1 ">
                    <AiFillFilePdf className="text-red-600 w-[16.5px] h-[21px]" />
                    <p
                      className=" font-Poppins font-[400] text-sm text-[rgba(44,39,36,0.75)]">
                      {text}
                    </p>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <FooetRecently />
      <Footer />
    </>
  );
};

export default CurrentOffiars;