import { Container } from "@/components/container";
import { GitHubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linked-in";
import { Link } from "@/components/link";

export const Footer = () => (
  <footer>
    <Container className="flex items-center justify-between border-t py-8 text-sm sm:text-base">
      <div>&copy; {new Date().getFullYear()} Mateusz Aliyev</div>
      <div className="flex items-center gap-4">
        <Link
          className="text-gray-400 outline-none transition hover:text-gray-600 focus-visible:text-gray-600"
          href="/github"
          target="_blank"
        >
          <GitHubIcon className="h-5 w-5" />
        </Link>
        <Link
          className="text-gray-400 outline-none transition hover:text-gray-600 focus-visible:text-gray-600"
          href="/linkedin"
          target="_blank"
        >
          <LinkedInIcon className="h-5 w-5" />
        </Link>
      </div>
    </Container>
  </footer>
);
