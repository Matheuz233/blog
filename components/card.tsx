import { getTagColor } from "@/utils/colors";
import { Badge, Flex, Text } from "@radix-ui/themes";
import moment from "moment";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const PostCard = ({ title, description, date, tags }: PostCardProps) => {
  const isNewPost = (date: string) => {
    const postDate = moment.utc(date);
    const currentDate = moment.utc();
    const daysDifference = postDate.diff(currentDate, 'days');

    return daysDifference >= -3;
  }

  return (
    <div className="w-full min-h-24 bg-[#4f2929] rounded-md p-4">
      <Flex direction="column" gap="2">
        <div className="flex flex-col items-baseline justify-between sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2 w-[100%] sm:w-auto">
            <Text size="3" weight="bold" truncate={true}>
              {title}
            </Text>
            {isNewPost(date) && (
              <Badge variant="solid" color="green">
                Novo
              </Badge>
            )}
          </div>
          <Text size="3" weight="bold">
            {moment(date, "YYYY-MM-DD").format("DD/MM/YY")}
          </Text>
        </div>
        <Text size="2" truncate={true} >
          {description}
        </Text>
        <Flex gap="1">
          <Text size="2" weight="bold">Tags:</Text> {tags.map((tag, index) => (
            <Badge key={index} variant="solid" color={getTagColor(tag)}>
              {tag}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}

export { PostCard };
