import Accordion from './components/Accordion';
import RandomColor from './components/RandomColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadItems from './components/LoadItems';
import Responsive from './components/ResponsiveJSX';
import TreeView from './components/TreeViewUI';
import Menus from './components/TreeViewUI/data';
import QRCodeGenerator from './components/QR-CODE-Generator';
import ReactForm from './Testing/ReactForm';
import FirstHook from './Testing/usestate';
import ThemeToggle from './components/ThemeToggle';
import ScrollIndicator from './components/Scroll-Indication';
import ParentTab from './components/Custom-Tabs/parent-tab';
import ParentModal from './components/Custom-modal-popup/parentmodal';
import ProfileFinder from './components/Github-Profile-Finder';
import SearchAutocomplete from './components/Search-Autocomplete';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <>
      {/* Accordion Component */}
      {/* <Accordion /> */}
      {/* Random Color Generator Component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10}/> */}
      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}
      {/* Load more data component */}
      {/* <LoadItems /> */}
      {/* Responsive component */}
      {/* <Responsive />  */}
      {/* Tree View UI component */}
      {/* <TreeView menus={Menus} /> */}
      {/* QR Code Generator Component */}
      {/* <QRCodeGenerator /> */}
      {/* Theme Toggle Component */}
      {/* <ThemeToggle /> */}
      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
       */}
      {/* Custom Tab with dynamic content component */}
      {/* <ParentTab /> */}
      {/* Custom Modal Popup */}
      {/* <ParentModal /> */}
      {/* Github Profile Finder Component */}
      {/* <ProfileFinder /> */}
      {/* Search Autocomplete Component */}
      {/* <SearchAutocomplete /> */}
      {/* Tic Tac Toe  */}
      <TicTacToe />

      {/* React Form */}
      {/* <ReactForm /> */}
      {/* React All Hooks  */}
      {/* <FirstHook /> */}
    </>
  );
}

export default App;
