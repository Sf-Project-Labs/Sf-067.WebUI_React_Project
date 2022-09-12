import newsPhoto1 from '../assets/breakdown_section/01. playground.png';
import newsPhoto2 from '../assets/breakdown_section/02. basketball-hoop.png';
import newsPhoto3 from '../assets/breakdown_section/03. zoom-out-stadium.png';
import newsPhoto4 from '../assets/breakdown_section/04. trump.png';
import BreakdownSection from '../components/BreakdownSection/BreakdownSection';

function HomePage() {
  const mainNews = [
    {
      id: 1,
      image: newsPhoto1,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'NBA',
    },
    {
      id: 2,
      image: newsPhoto1,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      category: 'NBA',
    },
  ];

  const sideNews = [
    {
      id: 2,
      image: newsPhoto2,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 3,
      image: newsPhoto3,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 4,
      image: newsPhoto4,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ];

  return (
    <div>
      <BreakdownSection main={mainNews} side={sideNews} />
    </div>
  );
}

export default HomePage;
