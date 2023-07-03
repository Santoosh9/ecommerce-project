import React from 'react';
import UserNav from '../layout/UserNav';
import { Card, Typography } from '@material-tailwind/react';

const CurrentOffiars = () => {
  const HEAD = ['SN', 'Titel', 'Date', 'Download'];

  const data = [
    {
      sn: 1,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 2,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
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
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 5,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 6,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 7,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 8,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 9,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },
    {
      sn: 10,
      titel:
        'पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना,  पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, पुन: दरखास्त पेश गर्ने सम्बन्धी सूचना, ',
      date: '22/02/2023',
      image: './images/pdf.png',
      text: 'Download PDF',
    },

  ];
  return (
    <>
      <UserNav />

      <Card className="  ml-10 mr-10 ">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100   bg-slate-300 p-4">
                <Typography
                  variant="small"
                  color="blue"
                  
                  className="font-normal leading-none opacity-70 text-lg"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({sn, titel, date, image, text }, index) => (
            <tr key={sn} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {sn}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {titel}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography  className="flex flex-row gap-1">
                  <img src={image} alt="img" />
                  {text}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </>
  );
};

export default CurrentOffiars;
