"""AI app admin."""

from django.contrib import admin

from apps.ai.models.chunk import Chunk


class ChunkAdmin(admin.ModelAdmin):
    """Admin for Chunk model."""

    list_display = (
        "id",
        "text",
        "context",
    )
    search_fields = ("text",)


admin.site.register(Chunk, ChunkAdmin)
