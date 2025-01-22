import { Tooltip } from 'components/ui/tooltip';
import { topContributorsType } from 'types/contributor';

const ContributorAvatar = ({ contributor }: { contributor: topContributorsType }) => {
  const displayName = contributor.name || contributor.login;

  return (
    <Tooltip
      id={`avatar-tooltip-${contributor.login}`}
      content={`${contributor.contributions_count} contributions by ${displayName}`}
      
    >
      <a
        href={`/community/users/${contributor.login}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-[30px] w-[30px] rounded-full grayscale hover:grayscale-0"
          src={contributor.avatar_url}
          alt={`${displayName}'s avatar`}
        />
      </a>
    </Tooltip>
  );
};

export default ContributorAvatar;