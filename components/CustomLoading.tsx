import { ThemeProps } from '@/types/interfaces';
import { ImSpinner9 } from 'react-icons/im';
import { MainContainer } from './styles/CustomLoading';

const CustomLoading = ({ currentTheme }: { currentTheme?: ThemeProps }) => {
  return (
    <MainContainer className={`min-h-screen flex justify-center items-center`}>
      <div className="animate-spin">
        <ImSpinner9 size={50} color={currentTheme && currentTheme.primary} />
      </div>
    </MainContainer>
  );
};

export default CustomLoading;
