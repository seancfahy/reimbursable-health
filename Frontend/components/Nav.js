import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="p-4 bg-gray-50 border-b shadow-sm">
      <ul className="flex flex-wrap gap-4 text-sm text-gray-800">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/part-b">Part B</Link></li>
        <li><Link href="/part-d">Part D</Link></li>
        <li><Link href="/drug-mapping">Drug Mapping</Link></li>
        <li><Link href="/billing-guidelines">Billing Guidelines</Link></li>
        <li><Link href="/lcd-finder">LCD Finder</Link></li>
        <li><Link href="/use-cases">Use Cases</Link></li>
        <li><Link href="/cms-news">CMS News</Link></li>
        <li><Link href="/reports">Reports</Link></li>
        <li><Link href="/access-request">Access</Link></li>
        <li><Link href="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}