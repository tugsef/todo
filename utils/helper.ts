export const splitTextAtNearestSpace = ({text, limit}:{text:string,limit:number}) => {
    if (text.length <= limit) return text.trim();

    const trimmedText = text.substring(0, limit);
    const lastSpaceIndex = trimmedText.lastIndexOf(' ');
  
    if (lastSpaceIndex === -1) return trimmedText.trim() + "...";
  
    return trimmedText.substring(0, lastSpaceIndex).trim()+ "...";
  };