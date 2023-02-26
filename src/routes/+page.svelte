<script>
    import Showcase from "$lib/components/Showcase.svelte";
</script>

<div class="flex flex-col w-full md:my-auto">
    <div class="animate-fade-in-up">
        <Showcase>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row items-center gap-4">
                    <img src="/bellus.min.png" class="w-6" alt="Bellus"/>
                    <h1 class="playfair lowercase text-lg">Bellus</h1>
                </div>
            </div>
        </Showcase>
    </div>
    <div class="pt-6 animate-fade-in-up select-none">
        <Showcase small={false}>
            <div class="flex flex-col gap-1 py-4">
                <h2 class="text-4xl font-bold md:text-6xl sofia">Dimension Raid</h2>
                <div class="text-lg max-w-2xl font-light flex flex-col gap-4 py-2">
                    <p>
                        Create a dimension and join others in the race to leading the number one dimension in Discord.
                        Bellus is a Discord bot that brings dimensions, raids, bosses to Discord.
                    </p>
                    <p>
                        Fight against other dimension leaders in a global battlefield, take a spot at the leaderboards
                        or conquer the different battlefields
                    </p>
                </div>
                <div class="flex flex-row flex-wrap gap-2 sofia uppercase">
                    <a href="/discord" class="home--invite" rel="noreferrer" target="_blank">Try in our server</a>
                    <a href="/invite" class="home--invite" rel="noreferrer" target="_blank">Invite to your server</a>
                </div>
            </div>
        </Showcase>
    </div>
    <div class="flex flex-row flex-wrap md:grid md:grid-cols-2 gap-2 pt-6 animate-fade-in-up select-none">
        <Showcase title="Guide" href="https://path.bellus.quest" slime="sprites/foresia/sprite_0.png">
            <p>
                Are you in need of a guide, click here to check out the official web guide, Echidna's Path.
            </p>
        </Showcase>
        <Showcase title="Suggestions" href="/suggestions" slime="sprites/silva/sprite_1.png">
            <p>
                We are in need of suggestions over new features to include. If you have any new ideas,
                then feel free to click here to send your  suggestion.
            </p>
        </Showcase>
    </div>
    <div class="text-xs font-light text-zinc-400 pt-6 animate-fade-in-up select-none">
        <p>
            bellus is a personal project by <a href="https://mihou.pw" rel="noreferrer" target="_blank" class="text-white">shindou mihou</a>.
            it is not related to any organizations, whatsoever.
        </p>
        <p>all artwork in the bot and this website are either commercially-licensed or personally made.</p>
    </div>
</div>