import { NavigateButton } from "../shared/ui"



export const Header = ({}) => {
    return(
        <div className="flex justify-between items-center w-full pt-12">
            <NavigateButton title='ИмбаТоп' link='#header'/>

            <div className="gap-3.5 flex">
                <NavigateButton title='Аниме' link='#anime'/>
                <NavigateButton title='Манга' link='#manga'/>
                <NavigateButton title='Рандом Аниме' link='#randomAnime'/>
            </div>
        </div>
    )
}