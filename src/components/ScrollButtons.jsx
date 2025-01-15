import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollButtons = ({ targetId }) => {
  const scrollToSection = () => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <button
        onClick={scrollToSection}
        className="fixed bottom-4 z-10 bg-black text-yellow-500 p-2 rounded-full"
        style={{ left: "80%" }}
        aria-label="Scroll down"
      >
        <KeyboardDoubleArrowDownIcon style={{ fontSize: "40px" }} />
      </button>
    </div>
  );
};

export default ScrollButtons;