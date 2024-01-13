interface Voice {
  text: string;
  voice: string;
  tags: string[];
}

interface VoiceMap {
  title: string;
  url: string;
  voices: Voice[];
}
