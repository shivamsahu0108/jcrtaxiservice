<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep TanStack Start file routing and React TypeScript rather than a second router or bootstrap, because the hosted template requires this runtime.
- Define presentation tokens in src/styles.css and reuse shared components and section modules, so all pages retain one coherent brand system.
- Centralize public business details and enquiry URL generation in src/config/business.ts; leave missing contacts empty and never fabricate them.
- Booking enquiries are client-only, schema-validated drafts passed to WhatsApp; no booking persistence or confirmation is implied.
