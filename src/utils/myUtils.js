const GAME_VERSION = "v1.0.0";

export function addVersionText(scene) {
    const versionText = scene.add.text(
        scene.scale.width - 10, // Right edge
        10, // Top edge
        GAME_VERSION, 
        { fontSize: "24px", fontStyle: "bold", align: "right" }
    );
    versionText.setOrigin(1, 0); // Align to the top-right corner
    return versionText;
}
