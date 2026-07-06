
export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-8 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-[#F5F5F5]">Settings</h1>
          <p className="mt-1 text-sm text-[#F5F5F5]/40">
            Manage your preferences and account options
          </p>
        </div>

        <div className="flex flex-col items-center justify-center border border-white/10 bg-[#111111] px-6 py-20 text-center">
          <span className="mb-4 flex h-12 w-12 items-center justify-center bg-yellow-500/10 text-yellow-400">
            ⚙
          </span>
          <h2 className="text-base font-semibold text-[#F5F5F5]">
            Coming soon
          </h2>
          <p className="mt-2 max-w-sm text-sm text-[#F5F5F5]/40">
            Settings are being worked on. Check back later for verification
            rules, account, notification, and courier options.
          </p>
        </div>
      </div>
    </div>
  );
}